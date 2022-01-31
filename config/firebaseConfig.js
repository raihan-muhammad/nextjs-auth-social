import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2vfP00CxjgrU7WtJMSg7RH8i800a07bE",
  authDomain: "login-sosmed-6f8ef.firebaseapp.com",
  projectId: "login-sosmed-6f8ef",
  storageBucket: "login-sosmed-6f8ef.appspot.com",
  messagingSenderId: "689161435619",
  appId: "1:689161435619:web:9c095a2eac5d009f3cc8d6",
  measurementId: "G-87H1V7H0ZE",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
