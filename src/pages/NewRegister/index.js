import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

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

import moment from "moment";

import firebase from "firebase";
import AutoInput from "../../components/AutoInput";

const NewRegister = () => {
  useEffect(() => {
    (async () => {
      setUserLog(await firebase.auth().currentUser);
      setImage(
        "https://firebasestorage.googleapis.com/v0/b/ecocerradoapp-ae5da.appspot.com/o/logo-ecocerrado.jpeg?alt=media&token=a9c359b4-cc97-4154-88eb-0ded050d4db8"
      );
      setRegisterDate(moment().format("DD/MM/YYYY"));
      // await getProjects();
      // await getSpecies();
    })();
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location);
      if (location) {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const especies = [];
      const projetos = [];
      await firebase
        .database()
        .ref("/tbl_especies")
        .on("value", (snapshot) => {
          snapshot.forEach((element) => {
            especies.push(element);
          });
        });

      await firebase
        .database()
        .ref("/tbl_projetos")
        .on("value", (snapshot) => {
          snapshot.forEach((element) => {
            projetos.push(element);
          });
        });

      setDataProjects(projetos);
      setDataSpecies(especies);

      console.log(JSON.stringify(dataProjects));
    })();
  }, [dataProjects, dataSpecies]);

  const navigation = useNavigation();

  const [userLog, setUserLog] = useState(null);
  const [image, setImage] = useState();
  const [specie, setSpecie] = useState(null);
  const [project, setProject] = useState(null);
  const [registerDate, setRegisterDate] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [comment, setComment] = useState(null);
  const [imageUrl, setImageUrl] = useState();

  const [dataSpecies, setDataSpecies] = useState();
  const [dataProjects, setDataProjects] = useState();

  const getImageCameraRoll = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const getImageCamera = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  async function uploadPhoto() {
    console.log("Entrou em upload de foto");
    const path = `photos/${Date.now()}.jpg`;
    const response = await fetch(image);
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
        console.log(url);
        setImageUrl(url);
      }
    );
  }

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

        <TouchableOpacity onPress={getImageCameraRoll}>
          <Ionicons name="md-photos" size={30} color="#885500" />
        </TouchableOpacity>
      </SpaceBetween>

      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Selecione um Espécie</Text>
          <AutoInput />

          <Text style={styles.text}>Informe a data do registro</Text>
          <DataPicker
            onChange={(value) => {
              setRegisterDate(value);
            }}
            value={String(registerDate)}
            placeholder="Data do Registro"
          />

          <Text style={styles.text}>Localização</Text>
          <SpaceBetween>
            <TextInput
              value={String(latitude)}
              onChangeText={(e) => {
                setLatitude(e);
              }}
              placeholder={`Latitude ${latitude}`}
              style={styles.mediumInput}
            />
            <TextInput
              value={String()}
              onChangeText={(e) => {
                setLongitude(e);
              }}
              placeholder={`Longitude ${longitude}`}
              style={styles.mediumInput}
            />
          </SpaceBetween>

          <Text style={styles.text}>Selecione um projeto</Text>

          <Text style={styles.text}>Descreva</Text>
          <TextArea
            placeholder="Digite as observações constatadas"
            value={comment}
            onChange={(e) => {
              setComment(e);
            }}
          />

          <Button onPress={() => {}} color="#885500" text="Cadastrar" />
        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default NewRegister;
