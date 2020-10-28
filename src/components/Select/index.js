import React from "react";
import { StyleSheet, PixelRatio } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-community/picker";

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
      width: PixelRatio.getPixelSizeForLayoutSize(130),
      height: PixelRatio.getPixelSizeForLayoutSize(25),
      backgroundColor: "#f7f7f7",
      borderRadius: 50,
      borderColor: "rgba(136, 85, 0, 0.5)",
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 20,
      padding: 15,
    },
  });

  const options = props.options || {}
  let elements = options.map((option, index) => {
    return <Picker.Item label={option.label} value={option.value} key={index} />
  })

  return (
    // <RNPickerSelect
    //   placeholder={{
    //     label: `${props.placeholder}`,
    //     value: null,
    //     color: "#885500",
    //   }}
    //   placeholderColor="#885500"
    //   onValueChange={props.onChange}
    //   items={props.options}
    //   useNativeAndroidPickerStyle={false}
    //   style={pickerSelectStyles}
    //   value={props.value}
    // />
    <Picker
      selectedValue={props.value}
      style={pickerSelectStyles}
      onValueChange={props.onChange}
    >
      {
        elements
      }
    </Picker>
  );
};

export default Select;
