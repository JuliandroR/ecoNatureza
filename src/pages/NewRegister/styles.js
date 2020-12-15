import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(50),
    height: PixelRatio.getPixelSizeForLayoutSize(50),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(70),
  },

  location: {
    width: PixelRatio.getPixelSizeForLayoutSize(130),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    borderColor: "rgba(136, 85, 0, 0.5)",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 25,
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#885500",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtext: {
    color: "#885500",
    fontSize: 14,
    marginBottom: 10,
  },

  mediumInput: {
    width: "45%",
    height: PixelRatio.getPixelSizeForLayoutSize(25),
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
