import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAPXYxaM8ziRYhkvwt79Jy4yOWs0dHEhoE",
    authDomain: "e-clone-1cc97.firebaseapp.com",
    projectId: "e-clone-1cc97",
    storageBucket: "e-clone-1cc97.appspot.com",
    messagingSenderId: "837210367110",
    appId: "1:837210367110:web:a1f912d73c6b5bb4c95d07",
    measurementId: "G-DF4WS8SC8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)