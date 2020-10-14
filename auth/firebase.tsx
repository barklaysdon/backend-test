import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyClCOAkjPFfnWqyGkqL7nRLgcUItVy-ZXQ",
  authDomain: "test-a2d31.firebaseapp.com",
  databaseURL: "https://test-a2d31.firebaseio.com",
  projectId: "test-a2d31",
  storageBucket: "test-a2d31.appspot.com",
  messagingSenderId: "793806759693",
  appId: "1:793806759693:web:c1c5db19e2afe189ec3244",
  measurementId: "G-FMVKBPWERL",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
