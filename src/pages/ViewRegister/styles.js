import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(50),
  },

  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(150),
    height: PixelRatio.getPixelSizeForLayoutSize(150),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
    borderRadius: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#885500",
    marginBottom: 10,
    textAlign: "center",
  },

  scientificName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#B0AC3A",
    textAlign: "center",
    fontStyle: "italic",
  },

  topicTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#B0AC3A",
    textAlign: "left",
    marginTop: 50,
    marginBottom: 10,
  },

  container: {
      width: "95%",
      justifyContent: "center",
      alignItems: "center",
  },

  text: {
    fontSize: 14,
    color: "#885500",
    fontSize: 14,
    textAlign: "left",
  },

  mapStyle: {
    width: 350,
    height: 250,
  },
  
  viewButtons: {
    width: "70%",
    marginTop: 50,
  },

  numberLike: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
