import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
    containerHeader: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonOption: {
        width: PixelRatio.getPixelSizeForLayoutSize(150),
        height: PixelRatio.getPixelSizeForLayoutSize(70),
        borderRadius: 10,
        borderColor: "#885500",
        borderWidth: 1,
        overflow: "hidden",
        marginBottom: 30,
    },

    imageButton: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    textButton: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#885500",
    }
})