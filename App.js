import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Routes from "./src/routes";
import { LogBox } from "react-native";
import * as Permissions from "expo-permissions";
// import firebase from "firebase";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCyKCowsXTxEkGex1X9_QBBangxeh_PRUI",
//   authDomain: "ecocerradoapp-ae5da.firebaseapp.com",
//   databaseURL: "https://ecocerradoapp-ae5da.firebaseio.com",
//   projectId: "ecocerradoapp-ae5da",
//   storageBucket: "ecocerradoapp-ae5da.appspot.com",
//   messagingSenderId: "254220840823",
//   appId: "1:254220840823:web:02f0309cb38659d7ecfb72",
//   measurementId: "G-1EWLYYK1V1",
// };

// firebase.initializeApp(firebaseConfig);
// if (firebase.apps.length === 0) {
// }

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export default function App() {
  useEffect(() => {
    async () => {
      const { status, expires, permissions } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.LOCATION,
        Permissions.MEDIA_LIBRARY
      );
      if (status !== "granted") {
        alert("Nem todas as permissões foram concedidas");
      }

      // await getLocation();
    };
  });
  
  return <Routes />;
}
