import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  PageDefault,
  ImageBackground,
  SpaceBetween,
  SafeArea,
} from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";

import { styles } from "./styles";
import Register from "../../components/Register";
const explore_background = require("../../assets/img/explore_background.png");

const default_profile_photo = require("../../assets/default_profile_photo.png");

const Profile = () => {
  useEffect(() => {
    (async () => {
      await setUserId(firebase.auth().currentUser);
      await getDataUser();
      await getRegisters();
    })();
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  async function getDataUser() {
    await firebase
      .database()
      .ref(`/tbl_usuarios/${userId.uid}`)
      .once("value", async (snapshot) => {
        setData(snapshot.val());
      });
  }

  async function getRegisters() {
    let dataRegisters = [];
    let data = [];
    let cont = 0;

    await firebase
      .database()
      .ref("/tbl_registros")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataRegisters.push(child);
        });
      });
    dataRegisters.forEach(function (register, index) {
      if (register.val().user_id == userId.uid) {
        cont += 1;
        data.push({
          ...register.val(),
          key: `${index}`,
        });
      }
    });
    setRegistersData(data);
    setNumberRegisters(cont);
    setLoading(false);
    setVisible(true);
  }

  const navigation = useNavigation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [registersData, setRegistersData] = useState(null);
  const [userId, setUserId] = useState();
  const [numberRegisters, setNumberRegisters] = useState();

  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <HeaderMenu />

        <SpaceBetween>
          <Image source={default_profile_photo} style={styles.profilePhoto} />
          <NumberInfo title="registros" value={numberRegisters} />
          <NumberInfo title="curtidas" value={data.likes} />
        </SpaceBetween>

        <SpaceBetween>
          <Text style={styles.profileName}>{data.name}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NewRegister");
            }}
          >
            <AntDesign name="pluscircleo" size={35} color="#885500" />
          </TouchableOpacity>
        </SpaceBetween>

        <SafeArea style={styles.listRegisters}>
          {visible && (
            <FlatList
              data={registersData}
              keyExtractor={(register) => register.key}
              renderItem={(register) => (
                <Register
                  registerID={register.item.id_register}
                  source={register.item.image_url}
                  title={register.item.specieName}
                  scientificName={register.item.scientificName}
                  dropFunction={() => {}}
                  numberLikes={register.item.likes}
                  viewFunction={() => {
                    navigation.navigate("ViewRegister", {
                      data: register.item,
                    });
                  }}
                />
              )}
            />
          )}
        </SafeArea>
      </ImageBackground>
    </PageDefault>
  );
};

export default Profile;
