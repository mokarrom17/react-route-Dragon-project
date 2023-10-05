// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8i2-uRK7nB4X9joIXd9dLHsXkT7yhAmI",
    authDomain: "react-route-dragon-project.firebaseapp.com",
    projectId: "react-route-dragon-project",
    storageBucket: "react-route-dragon-project.appspot.com",
    messagingSenderId: "560299051320",
    appId: "1:560299051320:web:4388282acb68a10246d9cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;