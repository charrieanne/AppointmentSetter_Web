 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getFirestore, query, where, getDocs, doc,collection  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
 import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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

const querySnapshot = await getDocs(collection(db,"Users"));
login.addEventListener('click', (e) => {
   var email_username = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   
  if (email_username == "LTO ADMIN" && password == "adMinlto1987"){
    window.location = "a_homepage.html";
  }
  querySnapshot.forEach(doc => {

    if(doc.data().user_Type == "Processing_Officer" && doc.data().user_E == email){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("PO Login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
        });
    }
    else if(doc.data().user_Type == "Administrator" && doc.data().user_E == email){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("SA Login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
        });
    }
});

});