import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerHeader: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    logo: {
        width: 60,
        height: 60,
    },

    buttonOption: {
        width: "90%",
        height: 160,
        borderRadius: 10,
        borderColor: "#885500",
        borderWidth: 1,
        overflow: "hidden",
        marginBottom: 40,
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