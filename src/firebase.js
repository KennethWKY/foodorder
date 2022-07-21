import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNTdry5jkj8xqiRWfe-QOtgxF_y3nrbNs",
  authDomain: "order-4e243.firebaseapp.com",
  projectId: "order-4e243",
  storageBucket: "order-4e243.appspot.com",
  messagingSenderId: "1085106658268",
  appId: "1:1085106658268:web:8e194ac86a9c9781174d19",
  measurementId: "G-23CTNC11X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
