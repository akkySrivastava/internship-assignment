// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAusVQcAbNu_NfTlkWtWp6QxaDfmhl-PAQ",
  authDomain: "internship-auth.firebaseapp.com",
  projectId: "internship-auth",
  storageBucket: "internship-auth.appspot.com",
  messagingSenderId: "1009270223314",
  appId: "1:1009270223314:web:408dd7a410d6caee92580b",
  measurementId: "G-PMKGNT1ZE3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
