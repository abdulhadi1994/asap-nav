// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3c5wVGKx7H0bXQNH8TqjfPRXi2iyNv_A",
  authDomain: "fir-tutorial-9faed.firebaseapp.com",
  projectId: "fir-tutorial-9faed",
  storageBucket: "fir-tutorial-9faed.firebasestorage.app",
  messagingSenderId: "9529872924",
  appId: "1:9529872924:web:c9d1ffa784844fa1ee45d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
