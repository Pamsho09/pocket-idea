import { create } from 'domain';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyApCrYr-NvWuSiLkOoIrygI85WStV5bRcg",
authDomain: "pocket-idea.firebaseapp.com",
projectId: "pocket-idea",
storageBucket: "pocket-idea.appspot.com",
messagingSenderId: "642347362905",
appId: "1:642347362905:web:eefb9f8b5fa8e142ee1f48",
measurementId: "G-L8GZ9YVSPV"

};

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
const mapUserFromFirebaseAuthToUser = (user:any) => {
  const {displayName, email } = user
console.log('---->',user)
  return {
  
    username: displayName ||"",
    email
  }
}

export const onAuthStateChanged = (onChange:any) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
}
export const logingWithEmail = (email:string, password:string) => {
  

  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}
export const createUserWithEmailAndPassword = (email:string, password:string,username?:string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential:any) => {
    // Signed in
    userCredential.user.updateProfile({
      displayName: username
    })
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
export const logout = () => {
  return firebase.auth().signOut().then(e=>{
    console.log('logout')
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}