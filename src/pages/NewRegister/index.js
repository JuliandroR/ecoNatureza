import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";

import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import HeaderBack from "../../components/HeaderBack";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import { DataPicker } from "../../components/DataPicker";
import { Button } from "../../components/Buttons";

import Contants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import firebase from "firebase";
import "firebase/firestore";
import database from "firebase/database";

import Scripts from "./scripts";
import { AlertMessage } from "../../components/Alert";

const default_register_image_2 = require("../../assets/background_image_2.jpg");

const NewRegister = () => {
  useEffect(() => {
    getProjects();
    setSpecieList(getSpecies());
    // console.warn(getSpecies());
  }, []);

  async function getSpecies() {
    let dataSpecies = {};
    await firebase
      .database()
      .ref("tbl_especies")
      .once("value", async (snapshot) => {
        await snapshot.val().forEach((specie) => {
          dataSpecies.push({
            label: specie.speciesname,
            value: specie.speciesname,
          });
        });
      });
    // console.warn(dataSpecies)
    return dataSpecies;
  }

  async function getProjects() {
    let data = {};

    await firebase
      .database()
      .ref("/tbl_projetos")
      .on("value", (snapshot) => {
        snapshot.val().forEach((index, project) => {
          data.push({
            label: project.nomeprojeto,
            value: index,
          });
        });
      });

    return data;
  }

  const navigation = useNavigation();

  const [specie, setSpecie] = useState("");
  const [registerDate, setRegisterDate] = useState();
  const [location, setLocation] = useState(null);
  const [project, setProject] = useState("");
  const [keep, setKeep] = useState("");
  const [image, setImage] = useState(
    require("../../assets/background_image_2.jpg")
  );
  const [specieList, setSpecieList] = useState({});
  const defaultList = [
    { label: "Selecione um Projeto", value: null },
    { label: "Lorem", value: "Ipsum" },
    { label: "Lorem", value: "Ipsum" },
  ];

  const defaultList2 = [
    { label: "Selecione uma Espécie", value: null },
    { label: "Lorem", value: "Ipsum" },
    { label: "Lorem", value: "Ipsum" },
  ];

  function sendData() {
    const projects = ["community", project];
    Scripts.shared
      .newRegister({ specie, registerDate, location, projects, keep, image })
      .then((ref) => {
        AlertMessage("Sucesso", "Registro Adicionado com sucesso!");
        navigation.goBack();
      })
      .catch((error) => {
        AlertMessage("Erro", `${error}`);
      });
  }

  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderBack title="Novo Registro" />
      <SpaceBetween>
        <Image source={image} style={styles.image} />
        <TouchableOpacity onPress={() => {}}>
          <Entypo name="camera" size={30} color="#885500" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="md-photos" size={30} color="#885500" />
        </TouchableOpacity>
      </SpaceBetween>

      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Select
            placeholder="Selecione a espécie"
            options={defaultList2}
            value={specie}
            onChange={(e) => {
              setSpecie(e);
            }}
          />

          <DataPicker
            onChange={(value) => {
              setRegisterDate(value);
            }}
            value={registerDate}
            placeholder="Data do Registro"
          />

          <TouchableOpacity style={styles.location} onPress={() => {}}>
            <SpaceBetween>
              <FontAwesome name="map-marker" size={36} color="#885500" />
              <Text style={styles.text}>Localização</Text>
            </SpaceBetween>
          </TouchableOpacity>

          <Select
            placeholder="Vincular ao Projeto"
            options={defaultList}
            value={project}
            onChange={(e) => {
              setProject(e);
            }}
          />

          <TextArea
            placeholder="Digite as observações constatadas"
            value={keep}
            onChange={(e) => {
              setKeep(e);
            }}
          />

          <Button onPress={sendData()} color="#885500" text="Cadastrar" />
        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default NewRegister;
