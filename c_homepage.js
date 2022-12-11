licenserr.addEventListener('click', (e) => {

    //localStorage.setItem("Transaction", "License");

    window.location = "c_formL.html";
});
/*
motverr.addEventListener('click', (e) => {
   
    localStorage.setItem("Transaction", 'motor/vehicle');

    window.location = "c_formMV.html";
});*/

// Import the functions you need from the SDKs you need
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getAuth, signOut, onAuthStateChanged   } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8HcAXaBbQkWoYQs-kDaFzpnKNaeB10jM",
  authDomain: "lto-appointment-setter-46109.firebaseapp.com",
  databaseURL: "https://lto-appointment-setter-46109-default-rtdb.firebaseio.com",
  projectId: "lto-appointment-setter-46109",
  storageBucket: "lto-appointment-setter-46109.appspot.com",
  messagingSenderId: "1028451275200",
  appId: "1:1028451275200:web:dbcebfc7a9f1d1a4fc7825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    console.log("No log in User")
  }
});

logout.addEventListener('click', (e) => {

    signOut(auth).then(() => {
        window.location = "c_login.html";
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
   
        alert(errorMessage);
      });

});
