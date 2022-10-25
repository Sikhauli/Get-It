// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCesrOapuz9ajh1833TNKWLK1GK39KeiEc",
//   authDomain: "get-eat-cheap.firebaseapp.com",
//   projectId: "get-eat-cheap",
//   storageBucket: "get-eat-cheap.appspot.com",
//   messagingSenderId: "1065025002207",
//   appId: "1:1065025002207:web:a33eb77b4eae6e925ae76a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCesrOapuz9ajh1833TNKWLK1GK39KeiEc",
    authDomain: "get-eat-cheap.firebaseapp.com",
    projectId: "get-eat-cheap",
    storageBucket: "get-eat-cheap.appspot.com",
    messagingSenderId: "1065025002207",
    appId: "1:1065025002207:web:a33eb77b4eae6e925ae76a"

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export  default { auth };