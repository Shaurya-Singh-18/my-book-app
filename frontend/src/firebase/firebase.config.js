// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF9zpQ-Ic3IMOVagdPDy0GJ4tX03Bu9vk",
  authDomain: "book-store-mern-app-2a7d8.firebaseapp.com",
  projectId: "book-store-mern-app-2a7d8",
  storageBucket: "book-store-mern-app-2a7d8.firebasestorage.app",
  messagingSenderId: "318826611286",
  appId: "1:318826611286:web:61ac4ef5689bf86d55b1f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);