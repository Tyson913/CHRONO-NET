import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqvQg8aRtYdEbbHB5J8oR2vH0nQoBODPY",
  authDomain: "chrononet-ed5a6.firebaseapp.com",
  databaseURL: "https://chrononet-ed5a6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chrononet-ed5a6",
  storageBucket: "chrononet-ed5a6.firebasestorage.app",
  messagingSenderId: "151922325383",
  appId: "1:151922325383:web:b20f3eb102e16ef255c522",
  measurementId: "G-NRRQB1PDSB"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
