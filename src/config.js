import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA03UFkZupaYARL08aBUxWEuPdQylOnAdg",
  authDomain: "sign-up-form-demo.firebaseapp.com",
  projectId: "sign-up-form-demo",
  storageBucket: "sign-up-form-demo.appspot.com",
  messagingSenderId: "429487671722",
  appId: "1:429487671722:web:66440a0faa0e44b6b583d3"
});


export default firebaseConfig;
