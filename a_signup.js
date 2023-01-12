
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc,setDoc,doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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

signup.addEventListener('click', e => {

var user = document.querySelector('input[name="emp"]:checked');
var last_name  = document.getElementById('lname').value;
var first_name = document.getElementById('fname').value;
var middle_name = document.getElementById('mname').value;
var emp_IDa = document.getElementById('emp_id').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

 if(validateInputs()){
    e.preventDefault();
 }
else{

    if (user.value == '0') {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setDoc (doc(db, "Users", user.uid), {
            user_Type: "Processing_Officer",
            user_LN: last_name,
            user_FN: first_name,
            user_MN: middle_name,
            user_E: email,
            user_PWD: password,
            user_EID: emp_IDa
        });

        alert("User Created")
        //window.location = ("pc_requirementsInfo_MV.html")
        //window.location.href ='../Employee/Procesing Officer/file/pc_requirementsInfo_L.html'
        //console.log("User Created");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
        });
        sendEmailVerification(auth.currentUser)
        .then(() => {
        // Email verification sent!
        // ...
        });
    } else if (user.value == '1') {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setDoc (doc(db, "Users",user.uid) , {
        user_Type: "Administrator",
        user_LN: last_name,
        user_FN: first_name,
        user_MN: middle_name,
        user_E: email,
        user_PWD: password,
        user_EID: emp_IDa
            
        });
        // for redirecting to another page soon
        alert("User Created")
        //window.location = ("a_homepage.html")
        //console.log("User Created");
    //window.location.href ='../Employee/System Admin/file/a_homepage.html'
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
        });

}
}

});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => { 
    var user = document.querySelector('input[name="emp"]:checked');
    var last_name  = document.getElementById('lname').value;
    var first_name = document.getElementById('fname').value;
    var middle_name = document.getElementById('mname').value;
    var emp_IDa = document.getElementById('emp_id').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    const letters = /^[A-Za-z]+$/;


    if (last_name === '' ){
        alert("Last Name is required.")
    }
    else if (!last_name.match(letters)){
            alert('Please input alphabet characters only. (Last Name)');
        }
    
    
    if (first_name === ''){
        alert('First Name is required.');
    }
    else if (!first_name.match(letters)){
            alert('Please input alphabet characters only. (First Name)');
        }
    
    
    if (emp_IDa === ''){
        alert('Employee ID is required.');
        
    }
    
    if (middle_name === ''){
        alert('Please input N/A if not Applicable. (Middle Name)');
        //console.log("Please input N/A if not Applicable. (Middle Name)")
    }
    else if (!middle_name.match(letters)){
        alert('Please input alphabet characters only. (Middle Name)');
        //console.log("Please input alphabet characters only. (Middle Name)")
    }
    
    if(password === ''){
        alert('Password is required.');
        //console.log("Password is required.")
    } 
    
    if (email === ''){
        alert('Email is required.');
        //console.log("Email is required.")
    }

}
    password.onfocus = function() {
        document.getElementById("error1").style.display = "block";
       }
     
     password.onblur = function() {
        document.getElementById("error1").style.display = "none";
        document.getElementById("lowercase").style.display = "none";
        document.getElementById("uppercase").style.display = "none";
        document.getElementById("num").style.display = "none";
        document.getElementById("length").style.display = "none";
        document.getElementById("spclchrctr").style.display = "none";
       }
    
    password.onkeyup = function() {
        var upperCaseLetters = /[A-Z]/g;
        var lowerCaseLetters = /[a-z]/g;
        var numbers = /[0-9]/g;
        var spclchrctr = /[!@#$%^&*]/g;
        
        document.getElementById("error1").style.display = "none";

        if(!password.value.match(lowerCaseLetters)) {  
            document.getElementById("lowercase").style.display = "block";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        } 
        else if(!password.value.match(upperCaseLetters)) {  
            document.getElementById("uppercase").style.display = "block";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        } 
        else if(!password.value.match(numbers)) {  
            document.getElementById("num").style.display = "block";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        }
        else if(!password.value.match(spclchrctr)) {
            document.getElementById("spclchrctr").style.display = "block";
            document.getElementById("length").style.display = "none";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
          }
        else if(password.value.length < 8) {
            document.getElementById("length").style.display = "block";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        } 
        else{
            document.getElementById("error1").style.display = "none";
            document.getElementById("lowercase").style.display = "none";
            document.getElementById("uppercase").style.display = "none";
            document.getElementById("num").style.display = "none";
            document.getElementById("length").style.display = "none";
            document.getElementById("spclchrctr").style.display = "none";
        }
        }
    