import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjYpiqU52o2Sa0_hcY7tMdpnYhwf00b1s",
  authDomain: "intelliprep-1f480.firebaseapp.com",
  projectId: "intelliprep-1f480",
  storageBucket: "intelliprep-1f480.firebasestorage.app",
  messagingSenderId: "42480252255",
  appId: "1:42480252255:web:cdc618be61d5570c24f2ea",
  measurementId: "G-JGERHKE4GK",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
