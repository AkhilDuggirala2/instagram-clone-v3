// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSMlMjMx9tCj2CUlKevOnFnkUYuiwsAWY",
  authDomain: "instagram-clone-v3-ca1c0.firebaseapp.com",
  projectId: "instagram-clone-v3-ca1c0",
  storageBucket: "instagram-clone-v3-ca1c0.appspot.com",
  messagingSenderId: "835003336307",
  appId: "1:835003336307:web:026bbdd8e7d4242c824c06",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
