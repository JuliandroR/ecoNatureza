import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderBack from "../../components/HeaderBack";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import { DataPicker } from "../../components/DataPicker";
import { Button } from "../../components/Buttons";
import Input from "../../components/Input";

import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

import firebase from "firebase";

const NewRegister = () => {
  // useEffect(() => {
  //   async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       alert("Permissão de Localização não concedida");
  //     }
  //   };
  // });

  useEffect(() => {
    (async () => {
      setUserLog(await firebase.auth().currentUser);
      await getProjects();
      await getSpecies();
    })();
  }, [specieList, projectList]);

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

  async function getSpecie(specie_cod) {
    // console.warn(specie_cod);
    let dataSpecies = [];
    let array = [];

    await firebase
      .database()
      .ref("/tbl_especies")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataSpecies.push(child);
        });
      });
    dataSpecies.forEach((specie) => {
      if (specie_cod == specie.val().cod_especies) {
        array.push(specie.val().speciesname);
        array.push(specie.val().scientificname);
      }
    });
    // console.warn(array);
    // return array;
    setSpecieData(array);
  }

  async function getLocation() {
    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    // setLocation(location);
  }

  async function getImageCameraRoll() {
    let {
      status,
    } = await ImagePicker.ImagePicker.getCameraRollPermissionsAsync();
    if (status == "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      setImage(pickerResult.uri);
    } else {
      alert("Sem acesso o galeria!");
    }
  }

  async function getImageCamera() {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status == "granted") {
      let pickerResult = await ImagePicker.launchCameraAsync();
      setImage(pickerResult.uri);
    } else {
      alert("Sem acesso a câmera!");
    }
  }

  async function uploadPhoto(uri) {
    const path = `photos/${Date.now()}.jpg`;
    const response = await fetch(uri);
    const file = await response.blob();

    let upload = firebase.storage().ref(path).put(file);

    upload.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await upload.snapshot.ref.getDownloadURL();
        setImageUrl(url);
      }
    );
  }

  async function createLikesRegister(id) {
    let data = {
      likes: 0,
      users: [],
      id_register: id,
    };

    await firebase
      .database()
      .ref(`/tbl_likes/${id}`)
      .set(data)
      .then(async () => {
        console.log("Criar na tabela likes, sucesso!");
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao criar na tabela likes");
      });
  }

  async function sendDataProject() {
    await uploadPhoto(image);
    // console.warn(userLog.uid)
    // const specieData = await getSpecie(specie);
    const id = Date.now();

    let data = {
      id: id,
      user_id: userLog.uid,
      specieName: specieData[0],
      scientificName: specieData[1],
      data_registro: registerDate,
      project_name: project,
      location: {
        latitude: latitude,
        longitude: longitude,
      },
      descricao: keep,
      image_url: imageUrl,
    };

    await firebase
      .database()
      .ref(`/tbl_registros/${id}`)
      .set(data)
      .then(async () => {
        console.log("Registro Cadastrado com sucesso");
        await createLikesRegister(id);
        alert("Cadastrado");
        navigation.navigate("Profile");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar o registro");
      });
  }

  const navigation = useNavigation();

  const [userLog, setUserLog] = useState(null);
  const [specieList, setSpecieList] = useState(null);
  const [projectList, setProjectList] = useState(null);
  const [specie, setSpecie] = useState("");
  const [specieData, setSpecieData] = useState();
  const [registerDate, setRegisterDate] = useState(Date.now());
  const [project, setProject] = useState("");
  const [keep, setKeep] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/ecocerradoapp-ae5da.appspot.com/o/logo-ecocerrado.jpeg?alt=media&token=a9c359b4-cc97-4154-88eb-0ded050d4db8"
  );

  getLocation();

  return (
    <PageDefault style={{ paddingTop: 50 }}>
      <HeaderBack title="Novo Registro" />
      <SpaceBetween>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity
          onPress={() => {
            getImageCamera();
          }}
        >
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
                getSpecie(e);
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
                value={`${latitude}`}
                onChange={(e) => {
                  setLatitude(e);
                }}
                placeholder={`Atual ${latitude}`}
                isPassword={false}
              />
            </>
          )}

          {longitude && (
            <>
              <Text style={styles.subtext}>Informe a longitude</Text>
              <Input
                value={`${longitude}`}
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

          <Button
            onPress={() => {
              sendDataProject();
            }}
            color="#885500"
            text="Cadastrar"
          />
        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default NewRegister;
