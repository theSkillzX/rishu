import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBvBMolTbMG1biava-oHdxsWswMZFAZ_e0",
    authDomain: "hospital-41b61.firebaseapp.com",
    databaseURL: "https://hospital-41b61-default-rtdb.firebaseio.com",
    projectId: "hospital-41b61",
    storageBucket: "hospital-41b61.appspot.com",
    messagingSenderId: "228439327614",
    appId: "1:228439327614:web:6bf43d785a4b15cde9692f",
    measurementId: "G-05T57E0D34"
  };

const app = initializeApp(firebaseConfig);

export default app;