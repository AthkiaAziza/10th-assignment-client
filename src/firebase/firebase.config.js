// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA8KxFfmdoQ9BrV2xFinQdYrLinQsQvtM",
  authDomain: "th-assignment-client.firebaseapp.com",
  projectId: "th-assignment-client",
  storageBucket: "th-assignment-client.appspot.com",
  messagingSenderId: "519140508678",
  appId: "1:519140508678:web:9bcdc43c4bc1342eee2f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;