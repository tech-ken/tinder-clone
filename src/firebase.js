import firebase from "firebase";

const firebaseConfig = {
      apiKey: "AIzaSyCoLluRbcNaQ8EEqu9zHICgCPVwvWnXAl8",
      authDomain: "tinder-clone-da934.firebaseapp.com",
      projectId: "tinder-clone-da934",
      storageBucket: "tinder-clone-da934.appspot.com",
      messagingSenderId: "191731404229",
      appId: "1:191731404229:web:8d3467b182c4633da34fac",
      measurementId: "G-J67W3JQCK8"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig)
    const database = firebaseApp.firestore();

    export default database;