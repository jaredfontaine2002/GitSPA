import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import config from './Secret'




  //firebase.initializeApp(config);
  // Initialize Firebase
  firebase.initializeApp(config);
  

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;
