import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'

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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)