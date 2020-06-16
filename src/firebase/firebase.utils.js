import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBkKq4FoUVwyxe1gqqVr875_c9w5LHJW9g",
  authDomain: "crwn-db-168d4.firebaseapp.com",
  databaseURL: "https://crwn-db-168d4.firebaseio.com",
  projectId: "crwn-db-168d4",
  storageBucket: "crwn-db-168d4.appspot.com",
  messagingSenderId: "66884735013",
  appId: "1:66884735013:web:32ab85dc8c840ce4452fcc",
  measurementId: "G-KY950WNLD9"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
