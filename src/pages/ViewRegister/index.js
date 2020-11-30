import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from "react-native";
import {
  PageDefault,
  ImageBackground,
  SpaceBetween,
  SafeArea,
} from "../../components/Views";
import { SimpleLineIcons, Feather, Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import {
  ContainerButtons,
  ButtonDrop,
  NumberDrop,
} from "../../components/Register/styles";
import HeaderBack from "../../components/HeaderBack";

const explore_background = require("../../assets/img/explore_background.png");

import firebase from "firebase";

const ViewRegister = ({ navigation, route }) => {
  const data = route.params?.data;

  useEffect(() => {
    (async () => {
      setUserLog(await firebase.auth().currentUser);
      await getLikeNumber();
      await verifyLiked();
      await verifyLogged();
    })();
  });

  async function getLikeNumber() {
    await firebase
      .database()
      .ref("/tbl_likes/" + props.registerID)
      .once("value", async (snapshot) => {
        setNumberLikes(snapshot.val().likes);
        if (snapshot.val().users !== undefined) {
          console.log("Definido");
          setListLikes(snapshot.val().users);
        }
      });
  }

  async function verifyLogged() {
    const userLog = await firebase.auth().currentUser;
    if (userLog != undefined) {
      setLogged(true);
    }
  }

  async function verifyLiked() {
    if (numberLikes != 0 && logged != false) {
      if (listLikes.indexOf(`${userlog.uid}`) != -1) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }

  async function addLike() {
    if (logged === true) {
      let array;
      if (numberLikes !== 0) {
        array = listLikes;
        array.push(userlog.uid);
      } else {
        array = [];
        array.push(`${userlog.uid}`);
      }
      let likes = numberLikes + 1;

      await firebase.database().ref(`/tbl_likes/${props.registerID}`).update({
        likes: likes,
        users: array,
      });

      setLiked(true);
    } else {
      alert("Você deve estar logado para curtir!");
      navigation.navigate("Login");
    }
  }

  async function removeLike() {
    const array = listLikes;

    const index = array.indexOf(`${userlog.uid}`);
    if (index > -1) {
      array.splice(index, 1);
    }

    let likes = numberLikes - 1;

    await firebase.database().ref(`/tbl_likes/${data.id}`).update({
      likes: likes,
      users: array,
    });

    setLiked(false);
  }

  const [numberLikes, setNumberLikes] = useState();
  const [listLikes, setListLikes] = useState([]);
  const [userlog, setUserLog] = useState();
  const [liked, setLiked] = useState(false);
  const [logged, setLogged] = useState(false);
  // console.warn(data);
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <HeaderBack title="" />

        <SafeArea>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Image
                source={{ uri: data.image_url }}
                style={styles.image}
                resizeMode="contain"
              />

              <Text style={styles.title}>{data.specieName}</Text>
              <Text style={styles.scientificName}>{data.scientificName}</Text>

              <View style={styles.container}>
                <Text style={styles.topicTitle}>Descrição da Observação</Text>
                <Text style={styles.text}>{data.descricao}</Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.topicTitle}>Local do Registro</Text>
                <MapView
                  style={styles.mapStyle}
                  loadingEnabled={true}
                  region={{
                    latitude: -20.4516434,
                    longitude: -54.6576368,
                    latitudeDelta: 8,
                    longitudeDelta: 8,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: data.location.latitude,
                      longitude: data.location.longitude,
                    }}
                    title={data.specieName}
                    description={data.scientificName}
                  />
                </MapView>
              </View>

              <ContainerButtons style={styles.viewButtons}>
                {!liked && (
                  <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={() => {
                      addLike();
                    }}
                  >
                    <SimpleLineIcons name="drop" size={40} color="#885500" />
                    <NumberDrop>{numberLikes}</NumberDrop>
                  </TouchableOpacity>
                )}

                {liked && (
                  <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={() => {
                      removeLike();
                    }}
                  >
                    <Entypo name="drop" size={40} color="#885500" />
                    <NumberDrop>{numberLikes}</NumberDrop>
                  </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => {}}>
                  <Feather name="share-2" size={40} color="#885500" />
                </TouchableOpacity>
              </ContainerButtons>
            </View>
          </ScrollView>
        </SafeArea>
      </ImageBackground>
    </PageDefault>
  );
};

export default ViewRegister;
