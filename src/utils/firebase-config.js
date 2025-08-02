import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU09XubnmjiwjUS36lEP7Gfo34btM-Zbg",
  authDomain: "netflix-ui-65a9f.firebaseapp.com",
  projectId: "netflix-ui-65a9f",
  storageBucket: "netflix-ui-65a9f.firebasestorage.app",
  messagingSenderId: "605646474345",
  appId: "1:605646474345:web:5640bcee57c81e4ffa66f8",
  measurementId: "G-T67ZJLDGBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);