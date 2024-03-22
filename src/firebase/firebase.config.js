// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjDD4Pu7WAJPYbPQFd67Ul3wfZBS6BPR0",
  authDomain: "auth-moha-milon-two.firebaseapp.com",
  projectId: "auth-moha-milon-two",
  storageBucket: "auth-moha-milon-two.appspot.com",
  messagingSenderId: "298490278318",
  appId: "1:298490278318:web:1a22551e35e7c67191183f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
