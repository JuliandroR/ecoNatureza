import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import TitleApp from "../TitleApp";

import { useNavigation } from "@react-navigation/native";
import { SpaceBetween } from "../Views";

const HeaderMenu = () => {
  const navigation = useNavigation();
  return (
    <SpaceBetween>
      <TitleApp title="Eco Cerrado" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("NewRegister");
        }}
      >
        <Feather name="menu" size={40} color="#885500" />
      </TouchableOpacity>
    </SpaceBetween>
  );
};

export default HeaderMenu;
