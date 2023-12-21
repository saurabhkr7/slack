// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmD8VLyJilxTpAAe0IFYie7A1JMFSr8Ow",
    authDomain: "slack-1972f.firebaseapp.com",
    projectId: "slack-1972f",
    storageBucket: "slack-1972f.appspot.com",
    messagingSenderId: "686314028126",
    appId: "1:686314028126:web:8a2fe7d9d4026ef32748cf",
    measurementId: "G-J8KBY4Y05N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);