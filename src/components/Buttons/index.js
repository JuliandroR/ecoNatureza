import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export const Button = (props) => {
  const style = StyleSheet.create({
    button: {
      width: 275,
      height: 50,
      borderRadius: 50,
      marginBottom: 30,
      backgroundColor: props.color,

      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      color: "#f7f7f7",
      fontSize: 18,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress} style={style.button}>
      <Text style={style.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export const FlatButton = (props) => {
  const style = StyleSheet.create({
    containerLogon: {
      width: "100%",
      justifyContent: "center",
      marginBottom: 20,
    },

    logonText: {
      textAlign: "center",
      fontSize: 14,
      color: props.cor,
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={style.containerLogon}>
      <Text style={style.logonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export const BackButton = (props) => {
  const style = StyleSheet.create({
    backButtonContainer: {
      justifyContent: "flex-start"
    },

    backButton: {
      marginBottom: 20,
      color: "#885500",
      textAlign: "left",
    },
  });
  return (
    <TouchableOpacity style={style.backButtonContainer} onPress={props.onPress}>
      <Ionicons style={style.backButton} name={props.name} size={32} />
    </TouchableOpacity>
  );
};
