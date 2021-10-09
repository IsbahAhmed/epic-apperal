import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCl4zNXAfg5QrZtMJ_d3u8BCnyxkuqVr54",
    authDomain: "epicapparel-ef531.firebaseapp.com",
 
    projectId: "epicapparel-ef531",
    storageBucket: "epicapparel-ef531.appspot.com",
    messagingSenderId: "270941323969",
    appId: "1:270941323969:web:dd195598807c354e0d0a40"
  };

//   var storageRef = firebase.storage().ref(`item-thumbs/${img.name}`);
//    await storageRef.put(img)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export var auth = firebase.auth();
  export var serverTimeStamp = ()=> firebase.firestore.FieldValue.serverTimestamp()
  export default firebase