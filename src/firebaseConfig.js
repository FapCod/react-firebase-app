import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAFYpyx9n4jvAlCH4XXX8spckxP-EGwzBs",
    authDomain: "proyecto-react-740bc.firebaseapp.com",
    projectId: "proyecto-react-740bc",
    storageBucket: "proyecto-react-740bc.appspot.com",
    messagingSenderId: "262048056942",
    appId: "1:262048056942:web:28ab53652e096804f5c87f",
    measurementId: "G-WETSKNKWBS"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 const auth = fire.auth()
 export {auth}