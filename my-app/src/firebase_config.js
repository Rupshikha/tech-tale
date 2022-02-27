// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAedjwCZj3rZ4SDG1v2ZE9AHq4i5qs18jw",

  authDomain: "blogproject-12f72.firebaseapp.com",

  projectId: "blogproject-12f72",

  storageBucket: "blogproject-12f72.appspot.com",

  messagingSenderId: "140874581472",

  appId: "1:140874581472:web:c14e7a79850169cf039785"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export const auth = getAuth(app);

