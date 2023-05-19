// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1Gf8LlrQXAXir-4rzYHiHM4X9N0QbcKI",
    authDomain: "kids-zone-60dbc.firebaseapp.com",
    projectId: "kids-zone-60dbc",
    storageBucket: "kids-zone-60dbc.appspot.com",
    messagingSenderId: "79677248564",
    appId: "1:79677248564:web:0f910dbe48305ce8e02661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;