import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDosHys6foO4puR61_hTwqXTQCmcdDlOMU",
    authDomain: "fair-play-3ff27.firebaseapp.com",
    projectId: "fair-play-3ff27",
    storageBucket: "fair-play-3ff27.appspot.com",
    messagingSenderId: "725485197877",
    appId: "1:725485197877:web:e786acaace0fe5cc0b2f7c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { auth}
  export default db;