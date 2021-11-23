import { create } from 'domain';
import * as firebase from 'firebase'
import toast from 'react-hot-toast';

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
const mapUserFromFirebaseAuthToUser = (user: any) => {
  const { displayName, email } = user
  return {
    username: displayName || "",
    id: user.uid
  }
}

export const onAuthStateChanged = (onChange: any) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(googleProvider).catch(err => {
      toast.error(err.message)
    })
}
export const logingWithEmail = (email: string, password: string) => {


  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // ...
    })
    .catch(err => {
      toast.error(err.message)
    })

}
export const createUserWithEmailAndPassword = (email: string, password: string, username?: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential: any) => {
      // Signed in
      userCredential.user.updateProfile({
        displayName: username
      })
      // ...
    })
    .catch(err => {
      toast.error(err.message)
    })
}
export const logout = () => {
  return firebase.auth().signOut().then(e => {
  }).catch(err => {
    toast.error(err.message)
  })
}

export const  createData = async (collection: string, data: any) => {
  return db.collection(collection).add(data).then(res => {
    return res
  }
  )
    .catch(err => {
      toast.error(err.message)
    })

}

export const getPockets = (id: string) => {
  return db.collection("pocket").where("userId", "==", id,).get().then(snapshot => {
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    return data
  })
    .catch(err => {
      toast.error(err.message)
    })
}