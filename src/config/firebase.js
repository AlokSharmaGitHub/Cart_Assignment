import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA4PyzSOuDcJvBbHp1MFt01F8XkOIMTv8M",
    authDomain: "login-firebase-b9523.firebaseapp.com",
    projectId: "login-firebase-b9523",
    storageBucket: "login-firebase-b9523.appspot.com",
    messagingSenderId: "20912537955",
    appId: "1:20912537955:web:c71c06fc5c4d444a331356"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;