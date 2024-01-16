import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfRqw4LekyHfVDamDj857_Ie0G4G5ubgs",
  authDomain: "fbbb-554d4.firebaseapp.com",
  projectId: "fbbb-554d4",
  storageBucket: "fbbb-554d4.appspot.com",
  messagingSenderId: "548765448476",
  appId: "1:548765448476:web:6d3b2af8a1145cbba2a2d9",
  measurementId: "G-509Z7Q39KX"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)
export { app, auth, db, storage };