import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const styles = StyleSheet.create({
  checkboxContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  textCheckbox: {
    color: "#885500",
    fontSize: 16,
  },
});

const Checkbox = (props) => {
  return (
    <View style={styles.checkboxContainer}>
      <Text style={styles.textCheckbox}>{props.text}</Text>
      <CheckBox
        disabled={false}
        value={props.value}
        onValueChange={(e) => props.onValueChange(e)}
      />
    </View>
  );
};

export default Checkbox;
