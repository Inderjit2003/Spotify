// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAME4Fe9145uhlXCXCKZBgphYvnP8vSuN8",
  authDomain: "otp-project-1eecc.firebaseapp.com",
  projectId: "otp-project-1eecc",
  storageBucket: "otp-project-1eecc.appspot.com",
  messagingSenderId: "542717975720",
  appId: "1:542717975720:web:dff3aaf71ee6881508f69d",
  measurementId: "G-12C2ESGF7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);