import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDmjxX3rIIpQVlWQMHDF2dFgmn_olMbbkQ",
    authDomain: "reveal-db.firebaseapp.com",
    projectId: "reveal-db",
    storageBucket: "reveal-db.appspot.com",
    messagingSenderId: "412930121821",
    appId: "1:412930121821:web:1da383e4e45bc9691bedb4"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  //If we wanted to do it with Redirect:
//   export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
              displayName, 
              email,
              createdAt  
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
    //if user data does not exist
    //create / set the document with the data from userAuth in my collection

    //if user data exists
    //return userDocRef
  };