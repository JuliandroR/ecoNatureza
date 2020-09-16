import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
  scroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  cardSpecie: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#885500",
    borderWidth: 2,
    padding: 10,
    marginBottom: 30,
  },

  imageSpecie: {
    width: PixelRatio.getPixelSizeForLayoutSize(60),
    height: PixelRatio.getPixelSizeForLayoutSize(60),
    borderRadius: 10,
  },

  popularName: {
    width: "100%",
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "bold",
    color: "#B0AC3A",
  },

  scientificName: {
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    color: "#885500",
  },

  button: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
  },
});
