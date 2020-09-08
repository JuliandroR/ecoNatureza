import React from "react";
import { Image, StyleSheet, PixelRatio } from "react-native";

const logo = require("../../assets/img/logo.png");

const Logo = (props) => {
  const size_value = props.size;
  const style = StyleSheet.create({
    image: {
      width: PixelRatio.getPixelSizeForLayoutSize(size_value),
      height: PixelRatio.getPixelSizeForLayoutSize(size_value),
      marginBottom: 30,
    }
  });
  return <Image source={logo} style={style.image} />;
};

export default Logo;
