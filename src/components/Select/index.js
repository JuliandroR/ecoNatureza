import React from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Select = (props) => {
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 4,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
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
    <RNPickerSelect
      placeholder={{
        label: `${props.placeholder}`,
        value: null,
        color: "#885500",
      }}
      onValueChange={(value) => console.log(value)}
      items={props.options}
      useNativeAndroidPickerStyle={false}
      style={pickerSelectStyles}
    />
  );
};

export default Select;
