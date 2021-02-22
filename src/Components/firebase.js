import firebase from 'firebase';

const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyDuujrSN5daZnXSmtfg3HL-4WPi8QpxGls",
    authDomain: "ecommerceauth-913a3.firebaseapp.com",
    projectId: "ecommerceauth-913a3",
    storageBucket: "ecommerceauth-913a3.appspot.com",
    messagingSenderId: "632346848974",
    appId: "1:632346848974:web:fc12debaf6f93fe78daa9f",
    measurementId: "G-Q4Y2G49T4T"
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };