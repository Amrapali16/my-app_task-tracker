import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB0EXWS9pVLbJzK7j_OZMxO1RVMcO1Fles",
    authDomain: "gkeep-9ac99.firebaseapp.com",
    projectId: "gkeep-9ac99",
    storageBucket: "gkeep-9ac99.appspot.com",
    messagingSenderId: "336717555523",
    appId: "1:336717555523:web:ea6811783098e15cf231f6",
    // measurementId: "${config.measurementId}"
  };

  export const app = initializeApp(firebaseConfig);