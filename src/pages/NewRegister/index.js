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
import Input from "../../components/Input";

import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

import firebase from "firebase";

import Scripts from "./scripts";
import { AlertMessage } from "../../components/Alert";
import { forSlideLeft } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators";

const default_register_image_2 = require("../../assets/background_image_2.jpg");

const NewRegister = () => {
  useEffect(() => {
    (async () => {
      await getProjects();
      await getSpecies();
      await getPermissionCamera();
      await getPermissionRollCamera();
      await getPermissionLocation();
    })();
  }, [specieList, projectList]);

  async function getPermissionLocation() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão de Localização não concedida");
    }
  }

  async function getPermissionCamera() {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão de Câmera não concedida");
    }
  }

  async function getPermissionRollCamera() {
    let {
      status,
    } = await ImagePicker.ImagePicker.getCameraRollPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão de Rolo da Câmera não concedida");
    }
  }

  async function getSpecies() {
    let dataSpecies = [];
    let array = [{ label: "Selecione uma Espécie", value: null }];

    await firebase
      .database()
      .ref("/tbl_especies")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataSpecies.push(child);
        });
      });
    dataSpecies.forEach((specie) => {
      array.push({
        label: specie.val().scientificname,
        value: specie.val().cod_especies,
      });
    });
    setSpecieList(array);
  }

  async function getProjects() {
    let dataProjects = [];
    let arrayProjects = [{ label: "Selecione um projeto", value: null }];

    await firebase
      .database()
      .ref("/tbl_projetos")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataProjects.push(child);
        });
      });
    dataProjects.forEach((element) => {
      arrayProjects.push({
        label: element.val().nomeprojeto,
        value: element.val().nomeprojeto,
      });
    });
    setProjectList(arrayProjects);
  }

  async function getLocation() {
    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    // setLocation(location);
  }

  async function getImageCameraRoll() {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  const navigation = useNavigation();

  const [specieList, setSpecieList] = useState(null);
  const [projectList, setProjectList] = useState(null);
  const [specie, setSpecie] = useState("");
  const [registerDate, setRegisterDate] = useState();
  const [project, setProject] = useState("");
  const [keep, setKeep] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [image, setImage] = useState(
    require("../../assets/background_image_2.jpg")
  );

  getLocation();

  function sendData() {
    let projects = ["community", project];
    Scripts.shared
      .newRegister({
        specie,
        registerDate,
        latitude,
        longitude,
        projects,
        keep,
        image,
      })
      .then((ref) => {
        AlertMessage("Sucesso", "Registro Adicionado com sucesso!");
        navigation.goBack();
      })
      .catch((error) => {
        AlertMessage("Erro", `${error}`);
      });
  }

  return (
    <PageDefault style={{ paddingTop: 50 }}>
      <HeaderBack title="Novo Registro" />
      <SpaceBetween>
        <Image source={image} style={styles.image} />
        <TouchableOpacity onPress={() => {}}>
          <Entypo name="camera" size={30} color="#885500" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            getImageCameraRoll();
          }}
        >
          <Ionicons name="md-photos" size={30} color="#885500" />
        </TouchableOpacity>
      </SpaceBetween>

      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Selecione um Espécie</Text>
          {specieList && (
            <Select
              placeholder="Selecione a espécie"
              options={specieList}
              value={specie}
              onChange={(e) => {
                setSpecie(e);
              }}
            />
          )}

          <Text style={styles.text}>Informe a data do registro</Text>
          <DataPicker
            onChange={(value) => {
              setRegisterDate(value);
            }}
            value={registerDate}
            placeholder="Data do Registro"
          />

          <Text style={styles.text}>Localização</Text>
          {latitude && (
            <>
              <Text style={styles.subtext}>Informe a latitude</Text>
              <Input
                value={latitude}
                onChange={(e) => {
                  setLatitude(e);
                }}
                placeholder={`Atual ${latitude}`}
                isPassword={false}
              />
            </>
          )}

          {latitude && (
            <>
              <Text style={styles.subtext}>Informe a longitude</Text>
              <Input
                value={longitude}
                onChange={(e) => {
                  setLatitude(e);
                }}
                placeholder={`Atual ${longitude}`}
                isPassword={false}
              />
            </>
          )}

          <Text style={styles.text}>Selecione um projeto</Text>
          {projectList && (
            <Select
              placeholder="Vincular ao Projeto"
              options={projectList}
              value={project}
              onChange={(e) => {
                setProject(e);
              }}
            />
          )}
          <Text style={styles.text}>Descreva</Text>
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
