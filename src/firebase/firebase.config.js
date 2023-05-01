// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATG_SaTNc71vVCebrk3e3CULLqP_5HMRQ",
  authDomain: "the-news-dragon-client-155d7.firebaseapp.com",
  projectId: "the-news-dragon-client-155d7",
  storageBucket: "the-news-dragon-client-155d7.appspot.com",
  messagingSenderId: "936382782608",
  appId: "1:936382782608:web:5e45794e48f355e8e00c15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;