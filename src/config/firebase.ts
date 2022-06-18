/*

Install Firebase if Needed
`npm install firebase`

*/

export {};

/* 
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain:"",
  projectId:"",
  storageBucket:"",
  messagingSenderId:"",
  appId:"",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { storage, db, auth, timestamp, firebaseConfig, googleAuthProvider };

export {};

*/
