import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrqW0ZstnQtsCLGpxcPMZYfV-qgJQGSc8",
  authDomain: "shop-ez.firebaseapp.com",
  databaseURL: "https://shop-ez.firebaseio.com",
  projectId: "shop-ez",
  storageBucket: "shop-ez.appspot.com",
  messagingSenderId: "658856313472",
  appId: "1:658856313472:web:e20e95eb6f0919bd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
