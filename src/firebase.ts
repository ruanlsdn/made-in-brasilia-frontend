import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1HoHYZe5sdm_BRdjGI69GSQ2ms8yZR1k",
  authDomain: "made-in-bsb-chat.firebaseapp.com",
  projectId: "made-in-bsb-chat",
  storageBucket: "made-in-bsb-chat.appspot.com",
  messagingSenderId: "411459032856",
  appId: "1:411459032856:web:042973ccf0ec75f3cdf06d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
