import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(70),
    height: PixelRatio.getPixelSizeForLayoutSize(70),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(70),
  },

  location: {
    width: PixelRatio.getPixelSizeForLayoutSize(130),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    borderColor: "rgba(136, 85, 0, 0.5)",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color:"#885500"
  },
});
