import React from "react";
import { Alert, View } from "react-native";

export const AlertMessage = (title, message) => {
  Alert.alert(
    `${title}`,
    `${message}`,
    [
      {
        text: "Entendido",
        onPress: () => {},
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};
