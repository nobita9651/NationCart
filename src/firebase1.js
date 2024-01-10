import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_YY0KvM7saDmM2oU8EjLz0IIEqaXGgTU",
  authDomain: "nationcartt.firebaseapp.com",
  projectId: "nationcartt",
  storageBucket: "nationcartt.appspot.com",
  messagingSenderId: "472961195411",
  appId: "1:472961195411:web:3e71cd494f98fd3bba5c66",
  measurementId: "G-8SP8GF3BR1",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
