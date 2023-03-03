import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDATjpdcbbo_JnyMwULt0zzuzMjfB-Vibw",
  authDomain: "react-chatlive.firebaseapp.com",
  projectId: "react-chatlive",
  storageBucket: "react-chatlive.appspot.com",
  messagingSenderId: "525349888595",
  appId: "1:525349888595:web:0a94fa48603d2537c81ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const logOut = ()=>{
  return signOut(auth)
}
