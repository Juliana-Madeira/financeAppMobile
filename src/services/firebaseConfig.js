import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAy2Zuost2XRnp-TlbTbmzAWMmX-pFpNDQ",
    authDomain: "financeapp-9c29d.firebaseapp.com",
    databaseURL: "https://financeapp-9c29d-default-rtdb.firebaseio.com",
    projectId: "financeapp-9c29d",
    storageBucket: "financeapp-9c29d.appspot.com",
    messagingSenderId: "197691296199",
    appId: "1:197691296199:web:a5dd6beaa092da556871e2",
    measurementId: "G-ZF82J3QSJH"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

export default firebase;