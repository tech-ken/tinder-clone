import firebase from "firebase";

const firebaseConfig = {
// copy from your own firebase config file
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig)
    const database = firebaseApp.firestore();

    export default database;
