// firebaseConfig.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAOnMM9gZGxY94tYqppl2OC3GtzszYJZGo",
  authDomain: "signup-login-8d7e4.firebaseapp.com",
  databaseURL: "https://signup-login-8d7e4-default-rtdb.firebaseio.com",
  projectId: "signup-login-8d7e4",
  storageBucket: "signup-login-8d7e4.appspot.com",
  messagingSenderId: "1029761545295",
  appId: "1:1029761545295:web:073802bb651cc1c812663a"
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Export Firebase services for use in other files
export { db, auth, storage };
