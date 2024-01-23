
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export the authentication instance
export const auth = getAuth(app);
