// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3RPVuJo_IggXykKmchnqd733DdQAQ4Ac",
  authDomain: "todo-with-crud.firebaseapp.com",
  projectId: "todo-with-crud",
  storageBucket: "todo-with-crud.appspot.com",
  messagingSenderId: "75707485163",
  appId: "1:75707485163:web:1140cc1d08e82a58d867ae",
  measurementId: "G-WWBTSPMTXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const db = getFirestore(app);

export {analytics,auth,db}