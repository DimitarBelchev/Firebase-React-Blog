import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnLQBqc5kTRhR-hmA1FXKOVhVo-V5aohg",
  authDomain: "fir-react-blog-edf23.firebaseapp.com",
  projectId: "fir-react-blog-edf23",
  storageBucket: "fir-react-blog-edf23.appspot.com",
  messagingSenderId: "110086287392",
  appId: "1:110086287392:web:a3c01270e9738b26710c45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
