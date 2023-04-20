// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhMQ0vxrY-Lt4a9-e_2EZ8e7IxBIQM2U4",
  authDomain: "hospital-project-8493d.firebaseapp.com",
  projectId: "hospital-project-8493d",
  storageBucket: "hospital-project-8493d.appspot.com",
  messagingSenderId: "1080432092435",
  appId: "1:1080432092435:web:79451f4ac3ca57bdb866e6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;