import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const style = StyleSheet.create({
    input: {
      width: 320,
      height: 60,
      backgroundColor: "#f7f7f7",
      borderRadius: 50,
      borderColor: "rgba(136, 85, 0, 0.5)",
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 25,
      paddingLeft: 25,
      color: "rgba(136, 85, 0, 1)",
    },
  });

  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="rgba(136, 85, 0, 0.5)"
      value={props.value}
      onChange={props.onChange}
      secureTextEntry={props.isPassword}
      style={style.input}
    />
  );
};

export default Input;
