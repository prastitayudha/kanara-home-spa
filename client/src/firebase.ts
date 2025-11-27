import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <--- TAMBAH INI

const firebaseConfig = {
  apiKey: "AIzaSyDKx6zvVCiRoqtlRl7yS9aNUxbNRxZutVA",
  authDomain: "kanara-db.firebaseapp.com",
  projectId: "kanara-db",
  storageBucket: "kanara-db.firebasestorage.app",
  messagingSenderId: "800720522982",
  appId: "1:800720522982:web:01d48e2a77fd6f64e57527",
  measurementId: "G-PS8S9QGRTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// --- INI KUNCI UTAMANYA (JANGAN SAMPAI HILANG) ---
export const db = getFirestore(app);