import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDotL35KyoXf8TTypNv2OsHngh7ScX5GH0",
  authDomain: "netflix-couple.firebaseapp.com",
  projectId: "netflix-couple",
  storageBucket: "netflix-couple.firebasestorage.app",
  messagingSenderId: "226143216060",
  appId: "1:226143216060:web:3dfed2b7a886ad7dbb0bb9",
  measurementId: "G-EF6K8N3YBH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);