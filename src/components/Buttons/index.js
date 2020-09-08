import React from "react";
import { View, StyleSheet, Text, PixelRatio, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Button = (props) => {
  const style = StyleSheet.create({
    button: {
      width: PixelRatio.getPixelSizeForLayoutSize(130),
      height: PixelRatio.getPixelSizeForLayoutSize(25),
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
      justifyContent: "flex-start",
      width: PixelRatio.getPixelSizeForLayoutSize(150),
    },

    backButton: {
      marginBottom: 20,
      color: "#885500",
      textAlign: "left",
    },
  });
  return (
    <TouchableOpacity style={style.backButtonContainer} onPress={props.onPress}>
      <Ionicons style={style.backButton} name={props.name} size={40} />
    </TouchableOpacity>
  );
};
