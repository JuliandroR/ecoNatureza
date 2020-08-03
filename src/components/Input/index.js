import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const style = StyleSheet.create({
    input: {
      width: 275,
      height: 50,
      backgroundColor: "#f7f7f7",
      borderRadius: 50,
      borderColor: "rgba(136, 85, 0, 0.5)",
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 20,
      padding: 15,
    },
  });

  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      caretHidden={props.isPassword}
      style={style.input}
    />
  );
};

export default Input;
