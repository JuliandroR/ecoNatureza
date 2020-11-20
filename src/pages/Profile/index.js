import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, ScrollView, TouchableOpacity } from "react-native";
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
const default_register_image = require("../../assets/background_image.jpg");
const default_register_image_2 = require("../../assets/background_image_2.jpg");
const default_register_image_3 = require("../../assets/background_image_3.jpg");

const Profile = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  useEffect(() => {
    getDataUser()
  }, []);

  async function getDataUser() {
    const userLog = firebase.auth().currentUser;
    await firebase
      .database()
      .ref(`/tbl_usuarios/${userLog.uid}`)
      .once("value", async (snapshot) => {
        setData(snapshot.val())
      });
  }

  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <HeaderMenu />

        <SpaceBetween>
          <Image source={default_profile_photo} style={styles.profilePhoto} />
          <NumberInfo title="registros" value={data.registers} />
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
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Register
              source={default_register_image}
              title="Árvore Bonitinha"
              scientificName="Harbores Bhonitas"
              dropFunction={() => {}}
              numberLikes="99"
              viewFunction={() => {
                navigation.navigate("ViewRegister", {
                  image: default_register_image,
                });
              }}
            />

            <Register
              source={default_register_image_2}
              title="Árvore Bonitinha"
              scientificName="Harbores Bhonitas"
              dropFunction={() => {}}
              numberLikes="99"
              viewFunction={() => {
                navigation.navigate("ViewRegister", {
                  image: default_register_image_2,
                });
              }}
            />

            <Register
              source={default_register_image_3}
              title="Árvore Bonitinha"
              scientificName="Harbores Bhonitas"
              dropFunction={() => {}}
              numberLikes="99"
              viewFunction={() => {
                navigation.navigate("ViewRegister", {
                  image: default_register_image_3,
                });
              }}
            /> */}
          </ScrollView>
        </SafeArea>
      </ImageBackground>
    </PageDefault>
  );
};

export default Profile;
