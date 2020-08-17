import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center"
    },

    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#885500",
        textAlign: "center",
    },

    number: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#885500",
        textAlign: "center",
    }
});

const NumberInfo = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.value}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default NumberInfo;
