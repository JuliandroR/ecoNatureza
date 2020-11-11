import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";

import { styles } from "./styles";
import Register from "../../components/Register";
import TitleApp from "../../components/TitleApp";

import firebase from "firebase";

const default_register_image = require("../../assets/background_image.jpg");

const ListCommunity = () => {
  useEffect(() => {
    (async () => {
      await getNumberInfo();
    })();
  });

  async function getNumberInfo() {
    let data = [];
    await firebase
      .database()
      .ref(`/tbl_registros`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    await firebase
      .database()
      .ref(`/tbl_especies`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    await firebase
      .database()
      .ref(`/tbl_colaboradores`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    await firebase
      .database()
      .ref(`/tbl_projetos`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    setNumberInfo(data);
  }

  async function getListCommunity() {
    let dataRegisters = [];
    let data = [];

    await firebase
      .database()
      .ref("/tbl_especies")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataRegisters.push(child);
        });
      });
    dataRegisters.forEach((register) => {
      data.push(register.val());
    });
    setCommunityRegisters(data);
  }

  const [numberInfo, setNumberInfo] = useState(null);
  const [communityRegisters, setCommunityRegisters] = useState();

  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu />
      <SpaceBetween>
        <NumberInfo title="registros" value={numberInfo[0]} />
        <NumberInfo title="espécies" value={numberInfo[1]} />
        <NumberInfo title="colaboradores" value={numberInfo[2]} />
        <NumberInfo title="projetos" value={numberInfo[3]} />
      </SpaceBetween>
      <TitleApp title="Registros da Comunidade" />
      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Register
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
        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default ListCommunity;
