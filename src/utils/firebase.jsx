// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA4uVlTYLBDBfPXemHZOh4RHd8pSPYs58A",
  authDomain: "movies-finder-2024.firebaseapp.com",
  projectId: "movies-finder-2024",
  storageBucket: "movies-finder-2024.appspot.com",
  messagingSenderId: "450138999146",
  appId: "1:450138999146:web:049b20a666076a6a007d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);