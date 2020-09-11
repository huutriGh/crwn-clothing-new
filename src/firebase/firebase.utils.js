import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDgQsivkoOrb3x0wINOiTOoEJQB5FgaDV8',
  authDomain: 'crwn-clothing-13082.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-13082.firebaseio.com',
  projectId: 'crwn-clothing-13082',
  storageBucket: 'crwn-clothing-13082.appspot.com',
  messagingSenderId: '187320987429',
  appId: '1:187320987429:web:5c3cc7380305d0dadd34cc',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provdier = new firebase.auth.GoogleAuthProvider();

provdier.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>auth.signInWithPopup(provdier);

export default firebase;
