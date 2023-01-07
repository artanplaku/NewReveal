import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    // signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc, 
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'

//Firebase configuration - received from Firebase website
const firebaseConfig = {
    apiKey: "AIzaSyDmjxX3rIIpQVlWQMHDF2dFgmn_olMbbkQ",
    authDomain: "reveal-db.firebaseapp.com",
    projectId: "reveal-db",
    storageBucket: "reveal-db.appspot.com",
    messagingSenderId: "412930121821",
    appId: "1:412930121821:web:1da383e4e45bc9691bedb4"
  };
  
  // Initialize Firebase
  // const firebaseapp = 
  initializeApp(firebaseConfig);

  //Google authentication provider
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  //Export Firebase auth and sign-in functions
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  //If we wanted to do it with Redirect:
  //   export const signInWithGoogleRedirect = () => 
  //    signInWithRedirect(auth, googleProvider);
  

  //export Firebase Firestore and functions
  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);
      
      objectsToAdd.forEach((object) =>{
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
      })

      await batch.commit();
      console.log('done')
  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})

    return categoryMap
  }


  //create a user document from authenticated user
export const createUserDocumentFromAuth = async (
    userAuth,
     additionalInformation = {}
     ) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // If user data does not exist, create/set document with data from userAuth in my collection
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
              displayName, 
              email,
              createdAt,
              ...additionalInformation,  
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    ////if user data exists
    //return userDocRef
    return userDocRef;
  };

  //create an authenticated user with email and password
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }

  //create an authenticated user with email and password
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);