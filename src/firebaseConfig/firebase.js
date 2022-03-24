import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "Aquí vienen tus datos",
  authDomain: "Aquí vienen tus datos",
  projectId: "Aquí vienen tus datos",
  storageBucket: "Aquí vienen tus datos",
  messagingSenderId: "Aquí vienen tus datos",
  appId: "Aquí vienen tus datos"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)