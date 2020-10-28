import firebase from "firebase";
import "firebase/firestore";
import database from "firebase/database";

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

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const user = firebase.auth().currentUser;
class Scripts {
  newRegister = async ({
    especie,
    date,
    location,
    project,
    keeps,
    localUri,
  }) => {
    const remoteUri = await this.uploadPhoto(localUri);

    return new Promise((res, rej) => {
      firebase
        .firestore()
        .collection("tbl_posts")
        .add({
          user_id: user,
          especie,
          date,
          location,
          project,
          keeps,
          image: remoteUri,
        })
        .then((ref) => {
          res(ref);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  uploadPhoto = async (uri) => {
    const path = `photos/${user}/${Date.now()}.jpg`;

    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();

      let upload = firebase.storage().ref(path).put(file);

      upload.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          rej(err);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          res(url);
        }
      );
    });
  };
}

Scripts.shared = new Scripts();

export default Scripts;
