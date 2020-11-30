import React, { useEffect, useState } from "react";
import { SimpleLineIcons, Feather, Entypo } from "@expo/vector-icons";
import {
  Container,
  ImageRegister,
  ContainerInfos,
  Title,
  TitleTopic,
  ScientificName,
  ContainerButtons,
  ButtonDrop,
  NumberDrop,
} from "./styles";

import { TouchableOpacity } from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const Register = (props) => {
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

    await firebase.database().ref(`/tbl_likes/${props.registerID}`).update({
      likes: likes,
      users: array,
    });

    setLiked(false);
  }

  const navigation = useNavigation();
  const [numberLikes, setNumberLikes] = useState();
  const [listLikes, setListLikes] = useState([]);
  const [userlog, setUserLog] = useState();
  const [liked, setLiked] = useState(false);
  const [logged, setLogged] = useState(false);
  return (
    <Container key={props.key}>
      <ImageRegister source={{ uri: props.source }} />
      <ContainerInfos>
        <Title>{props.title}</Title>

        <TitleTopic>Nome Cietífico</TitleTopic>
        <ScientificName>{props.scientificName}</ScientificName>

        <ContainerButtons>
          {!liked && (
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                addLike();
              }}
            >
              <SimpleLineIcons name="drop" size={25} color="#885500" />
              <NumberDrop>{numberLikes}</NumberDrop>
            </TouchableOpacity>
          )}

          {liked && logged && (
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                removeLike();
              }}
            >
              <Entypo name="drop" size={25} color="#885500" />
              <NumberDrop>{numberLikes}</NumberDrop>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={props.viewFunction}>
            <Feather name="arrow-right-circle" size={30} color="#885500" />
          </TouchableOpacity>
        </ContainerButtons>
      </ContainerInfos>
    </Container>
  );
};

export default Register;
