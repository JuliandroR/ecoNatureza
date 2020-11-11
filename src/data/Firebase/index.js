import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import { AlertMessage } from "../../components/Alert";
import { AsyncStorage } from "react-native";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyKCowsXTxEkGex1X9_QBBangxeh_PRUI",
  authDomain: "ecocerradoapp-ae5da.firebaseapp.com",
  databaseURL: "https://ecocerradoapp-ae5da.firebaseio.com",
  projectId: "ecocerradoapp-ae5da",
  storageBucket: "ecocerradoapp-ae5da.appspot.com",
  messagingSenderId: "254220840823",
  appId: "1:254220840823:web:02f0309cb38659d7ecfb72",
  measurementId: "G-1EWLYYK1V1",
};

firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
}

export const loginMethod = (navigation, email, pass) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then((response) => {
      // console.warn(response.user.uid)
      navigation.navigate("Profile");
    })
    .catch((error) => {
      if (error.code === "auth/wrong-password") {
        AlertMessage("Aviso", "Senha ou E-mail incorretos");
      } else if (error.code === "auth/user-not-found") {
        AlertMessage("Aviso", "O usuário não foi encontrado");
      } else if (error.code === "auth/invalid-email") {
        AlertMessage("Aviso", "E-mail Inválido");
      } else {
        console.warn(`Erro cod: ${error.code}`);
      }
    });
};

export const signInMethod = (
  navigation,
  name,
  bornDate,
  email,
  password,
  student
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (response) => {
      const uid = response.user.uid;
      const data = {
        id: uid,
        email: email,
        name: name,
        bornDate: bornDate,
        student: student,
        registers: 0,
        likes: 0,
      };
      await firebase
        .database()
        .ref(`/tbl_usuarios/${uid}`)
        .set(data)
        .then(() => {
          loginMethod(navigation, email, password);
        })
        .catch((error) => {
          console.warn(`Erro cod: ${error.code}`);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-exists") {
        AlertMessage("Aviso", "O e-mail inserido já possui cadastro");
      } else if (error.code === "auth/invalid-password") {
        AlertMessage("Aviso", "A senha informada não é válida");
      } else {
        console.warn(`Erro cod: ${error.code}`);
      }
    });
};
