import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SpaceBetween } from "../Views";
import { TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import TitleApp from "../TitleApp";

const styles = StyleSheet.create({
    title: {
        width: "90%",
        fontSize: 20,
    },
})

const HeaderBack = (props) => {
  const navigation = useNavigation();
  return (
    <SpaceBetween style={{ marginBottom: 50,}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-arrow-back" size={36} color="#885500" />
      </TouchableOpacity>

      <TitleApp title={props.title} style={styles.title} />
    </SpaceBetween>
  );
};

export default HeaderBack;
