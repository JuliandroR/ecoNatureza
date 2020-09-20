import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: PixelRatio.getPixelSizeForLayoutSize(150),
    height: PixelRatio.getPixelSizeForLayoutSize(100),
    marginBottom: 20,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#885500",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    width: "100%",
    height: PixelRatio.getPixelSizeForLayoutSize(50),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
  },

  titleProject: {
    fontSize: 20,
    fontWeight: "bold",
    width: "90%",
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
    color: "#885500",
  },

  description: {
    fontSize: 14,
    width: "80%"
  }
})
