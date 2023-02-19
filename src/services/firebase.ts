import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANpvkRSQ9AZHhd8jrPL-0zDf6HInjol5w",
  authDomain: "mib-chat-55ef7.firebaseapp.com",
  projectId: "mib-chat-55ef7",
  storageBucket: "mib-chat-55ef7.appspot.com",
  messagingSenderId: "473784580042",
  appId: "1:473784580042:web:0eee714d5b56fb67f04133",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
