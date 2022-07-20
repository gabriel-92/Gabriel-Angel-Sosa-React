// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa4TezGXoXM4gUk3VMmZrExhsMtMguT30",
    authDomain: "gabriel-sosa-react.firebaseapp.com",
    projectId: "gabriel-sosa-react",
    storageBucket: "gabriel-sosa-react.appspot.com",
    messagingSenderId: "251202442579",
    appId: "1:251202442579:web:a162609b929f5aad59bda6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
