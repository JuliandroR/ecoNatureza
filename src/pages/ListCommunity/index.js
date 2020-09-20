import React from "react";
import { View, ScrollView } from "react-native";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";

import { styles } from "./styles";
import Register from "../../components/Register";
import TitleApp from "../../components/TitleApp";

const default_register_image = require("../../assets/background_image.jpg");

const ListCommunity = () => {
  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu />
      <SpaceBetween>
        <NumberInfo title="registros" value="99" />
        <NumberInfo title="espécies" value="99" />
        <NumberInfo title="colaboradores" value="99" />
        <NumberInfo title="projetos" value="99" />
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
