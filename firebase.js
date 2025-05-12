// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC0VKd-CQrPIA_NcQx-Y-E1bW3Z_Rc2dhU",
  authDomain: "luminous-properties-eb90f.firebaseapp.com",
  projectId: "luminous-properties-eb90f",
  storageBucket: "luminous-properties-eb90f.appspot.com",  // 🔧 FIXED: changed .app to .com
  messagingSenderId: "527770474795",
  appId: "1:527770474795:web:d09a13ec89963b5931cd6e",
  measurementId: "G-NYBFY0J1SK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);       // Firestore (for property data)
export const storage = getStorage(app);    // Storage (for image uploads)
