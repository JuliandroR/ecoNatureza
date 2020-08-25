import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    spaceBetween: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden"
    },

    profilePhoto: {
        width: 100,
        height: 100,
    },

    profileName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#885500",
        marginTop: 10,
    },

    listRegisters: {
        flex: 1,
    },

    containerRegister: {
        width: 325,
        height: 150,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        borderColor: "#885500",
        borderWidth: 2,
    },

    imageRegister: {
        width: 150,
        position: "absolute",
        bottom: 0,
        left: 0,
        borderRadius: 10,
    },

    containerInfoRegister: {
        flexDirection: "column",
        justifyContent: "center",
    }
})