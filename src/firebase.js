import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlRHiuTQoxwog7Gy-fdvvoIVIWTujLfV4",
    authDomain: "iwopproject.firebaseapp.com",
    databaseURL: "https://iwopproject-default-rtdb.firebaseio.com",
    projectId: "iwopproject",
    storageBucket: "iwopproject.appspot.com",
    messagingSenderId: "894770296461",
    appId: "1:894770296461:web:50a5a97b0af547137814c4",
    measurementId: "G-EW3RX6CHBL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default app;