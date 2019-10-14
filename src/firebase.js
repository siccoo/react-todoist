import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB_w88mPvANL3WpxHyN4wrzciCgC1W1rIw",
    authDomain: "todoist-clone-31fa3.firebaseapp.com",
    databaseURL: "https://todoist-clone-31fa3.firebaseio.com",
    projectId: "todoist-clone-31fa3",
    storageBucket: "todoist-clone-31fa3.appspot.com",
    messagingSenderId: "671558898261",
    appId: "1:671558898261:web:6a71aa0985ef6599713adc"
}); 

export {firebaseConfig as firebase};