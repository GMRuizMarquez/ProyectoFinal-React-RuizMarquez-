import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCE_m7yC5iLwvoyDmuGpFLkGPCLKRrUBtk",
  authDomain: "shop-market-gonzaloruiz.firebaseapp.com",
  projectId: "shop-market-gonzaloruiz",
  storageBucket: "shop-market-gonzaloruiz.appspot.com",
  messagingSenderId: "800648132155",
  appId: "1:800648132155:web:4a7b164259e2664cd9ce1e",
  measurementId: "G-G2VBQ72CDB",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
