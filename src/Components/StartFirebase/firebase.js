import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBqvkKFVyaZJ4-QjGJnj1mBWDqEe8YM2Pw",
  authDomain: "fir-contacts-project.firebaseapp.com",
  databaseURL: "https://fir-contacts-project.firebaseio.com",
  projectId: "fir-contacts-project",
  storageBucket: "fir-contacts-project.appspot.com",
  messagingSenderId: "316085897899",
  appId: "1:316085897899:web:8350b60971859f1a1e05ee"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const currentUser = '';
const provider = new firebase.auth.GoogleAuthProvider();

//Google
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    debugger
    console.log('success');
    console.log(result);
    console.log(user.uid);
    console.log(user);
    currentUser = user;

    

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log('error');
    console.log(error);
  })
};


//Email And Password

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};



