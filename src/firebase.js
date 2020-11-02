import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAybeDqBvX64wRB_5A16Wjry2z-2D0oIwY",
  authDomain: "react-spas-5abbb.firebaseapp.com",
  databaseURL: "https://react-spas-5abbb.firebaseio.com",
  projectId: "react-spas-5abbb",
  storageBucket: "react-spas-5abbb.appspot.com",
  messagingSenderId: "829942384148",
  appId: "1:829942384148:web:f44ac43bd66f809f684901",
  measurementId: "G-DCV5LQFF7V",
};
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
