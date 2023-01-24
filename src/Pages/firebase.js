import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDD0kGiefSjpr2f-TPoaLzbC0t8rQn_cxk",
  authDomain: "otp-code-a8dd8.firebaseapp.com",
  projectId: "otp-code-a8dd8",
  storageBucket: "otp-code-a8dd8.appspot.com",
  messagingSenderId: "560661760047",
  appId: "1:560661760047:web:94faa080cc785a89955eda",
  measurementId: "G-XK4NZH78VD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default initializeApp