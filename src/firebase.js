// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSn35c51Ee047R9KEWoWIw5pqq3TupoFk",
  authDomain: "wchat-22c19.firebaseapp.com",
  projectId: "wchat-22c19",
  storageBucket: "wchat-22c19.firebasestorage.app",
  messagingSenderId: "843788324298",
  appId: "1:843788324298:web:240dbed1e20b4ccdb79333"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};
