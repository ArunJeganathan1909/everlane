// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWnzDwjfq68QF62QntikrqU4DXom7vRfY",
    authDomain: "fashion-e-commerce-93956.firebaseapp.com",
    projectId: "fashion-e-commerce-93956",
    storageBucket: "fashion-e-commerce-93956.appspot.com",
    messagingSenderId: "755797218915",
    appId: "1:755797218915:web:119265098526ec453d0a56"
  };
  
 // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { app, storage };