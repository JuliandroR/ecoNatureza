import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({

  profilePhoto: {
    width: PixelRatio.getPixelSizeForLayoutSize(50),
    height: PixelRatio.getPixelSizeForLayoutSize(50),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(50),
    borderRadius: 50,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#885500",
    marginTop: 10,
  },

  listRegisters: {
    flex: 1,
    paddingTop: 30,
  },

});
