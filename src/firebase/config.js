// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP2NodmIy11HCL6zkTO3gnP_4W_o3ANWI",
  authDomain: "react2-lesson8-b8a97.firebaseapp.com",
  projectId: "react2-lesson8-b8a97",
  storageBucket: "react2-lesson8-b8a97.appspot.com",
  messagingSenderId: "327180730580",
  appId: "1:327180730580:web:a5de80d81e571381e0fb41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
