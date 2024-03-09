// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2ZBLRznWUda8rXfu1WMoTVUv8IAxCn4Q",
  authDomain: "rasam2024-91cf9.firebaseapp.com",
  projectId: "rasam2024-91cf9",
  storageBucket: "rasam2024-91cf9.appspot.com",
  messagingSenderId: "811910620463",
  appId: "1:811910620463:web:ccaaf4072f45a8a4ed2dda"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};