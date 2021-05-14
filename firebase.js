// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPgwUUw81RQnQlj8sCgG72L5ZFczdrFwg",
    authDomain: "signal-clone-yt-56600.firebaseapp.com",
    projectId: "signal-clone-yt-56600",
    storageBucket: "signal-clone-yt-56600.appspot.com",
    messagingSenderId: "52340665140",
    appId: "1:52340665140:web:382480ed8941d7cf2bd361",
    measurementId: "G-BHE2Q9SD1T"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };


