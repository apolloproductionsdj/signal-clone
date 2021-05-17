// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPUZAzSZVlg9yLVXMJwKkvs9jc9MnZaNA",
    authDomain: "signal-clone-new-a7380.firebaseapp.com",
    projectId: "signal-clone-new-a7380",
    storageBucket: "signal-clone-new-a7380.appspot.com",
    messagingSenderId: "286952444981",
    appId: "1:286952444981:web:7da91079f62010f37a4d7c",
    measurementId: "G-KSKNXG4BP4"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

