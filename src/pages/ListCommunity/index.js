import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";

import { styles } from "./styles";
import Register from "../../components/Register";
import TitleApp from "../../components/TitleApp";

import firebase from "firebase";
import ContainerInfo from "../../components/ContainerInfo";
const default_register_image = require("../../assets/background_image.jpg");

const ListCommunity = () => {
  useEffect(() => {
    (async () => {
      await getListCommunity();
    })();
  });

  async function getSpecie(specie_cod) {
    let dataSpecies = [];
    let array;

    await firebase
      .database()
      .ref("/tbl_especies")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataSpecies.push(child);
        });
      });
    dataSpecies.forEach((specie) => {
      if (specie_cod === specie.cod_especies) {
        array = {
          name: specie.speciesname,
          scientific_name: specie.scientificname,
        };
      }
    });
    console.warn(array);
    return array;
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

  async function renderRegister(register) {
    let data_specie = getSpecie(register.especie_cod);
    return (
      <Register
        source={register.image_url}
        title={data_specie.name}
        scientificName={data_specie.scientific_name}
        dropFunction={() => {}}
        numberLikes={register.likes}
        viewFunction={() => {
          navigation.navigate("ViewRegister", {
            image: register,
          });
        }}
      />
    );
  }

  const [communityRegisters, setCommunityRegisters] = useState();
  getListCommunity()

  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu viewBack={true} />
      <ContainerInfo />
      <TitleApp title="Registros da Comunidade" />
      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          {communityRegisters != null && (
            <FlatList
              data={communityRegisters}
              renderItem={({ register }) => renderRegister(register)}
            />
          )}
        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default ListCommunity;
