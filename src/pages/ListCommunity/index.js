import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PageDefault, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import Register from "../../components/Register";
import TitleApp from "../../components/TitleApp";
import ContainerInfo from "../../components/ContainerInfo";

import firebase from "firebase";
const default_register_image = require("../../assets/background_image.jpg");

const ListCommunity = () => {
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      await getListCommunity();
    })();
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  async function getListCommunity() {
    let dataRegisters = [];
    let data = [];

    await firebase
      .database()
      .ref("/tbl_registros")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataRegisters.push(child);
        });
      });
    dataRegisters.forEach(function (register, index) {
      data.push({
        ...register.val(),
        key: `${index}`,
      });
    });
    setCommunityRegisters(data);
    setLoading(false);
    setVisible(true);
  }

  const [communityRegisters, setCommunityRegisters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  // console.log(communityRegisters);

  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu viewBack={true} />
      <ContainerInfo />
      <TitleApp title="Registros da Comunidade" />
      <SafeArea>
        {visible && (
          <FlatList
            data={communityRegisters}
            keyExtractor={(register) => register.key}
            renderItem={(register) =>
              <Register
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
            }
          />
        )}
      </SafeArea>
    </PageDefault>
  );
};

export default ListCommunity;
