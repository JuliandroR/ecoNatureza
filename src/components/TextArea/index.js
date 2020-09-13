import React from "react";
import { TextInput, StyleSheet, PixelRatio, View } from "react-native";

const styles = StyleSheet.create({
  textArea: {
    width: PixelRatio.getPixelSizeForLayoutSize(130),
    height: PixelRatio.getPixelSizeForLayoutSize(80),
    backgroundColor: "#f7f7f7",
    borderRadius: 30,
    borderColor: "rgba(136, 85, 0, 0.5)",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 25,
    color: "rgba(136, 85, 0, 1)",
  },
});

const TextArea = (props) => {
  return (
    <TextInput
      multiline
      numberOfLines={12}
      placeholder={props.placeholder}
      placeholderTextColor="rgba(136, 85, 0, 0.5)"
      value={props.value}
      onChange={props.onChange}
      style={styles.textArea}
    />
  );
};

export default TextArea;
