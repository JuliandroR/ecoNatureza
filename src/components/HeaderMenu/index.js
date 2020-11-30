import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import firebase from "firebase";

import TitleApp from "../TitleApp";

import { useNavigation } from "@react-navigation/native";
import { SpaceBetween } from "../Views";

const HeaderMenu = (props) => {
  useEffect(() => {
    (async () => {
      const userLog = await firebase.auth().currentUser;
      if (userLog != undefined) {
        setView(true);
      }
    })();
  });
  const navigation = useNavigation();
  const [view, setView] = useState(false);
  return (
    <SpaceBetween>
      {props.viewBack && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="ios-arrow-back" size={36} color="#885500" />
        </TouchableOpacity>
      )}
      <TitleApp title="Eco Cerrado" />
      {view && (
        <TouchableOpacity
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(function () {
                navigation.navigate("Access");
              })
              .catch(function (error) {
                alert("Ocorreu um erro");
              });
          }}
        >
          {/* <Feather name="menu" size={40} color="#885500" /> */}
          <MaterialIcons name="exit-to-app" size={40} color="#885500" />
        </TouchableOpacity>
      )}
    </SpaceBetween>
  );
};

export default HeaderMenu;
