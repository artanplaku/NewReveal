import React from 'react';
import SignUpForm from '../../components/SignUp/SignUpForm';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import { 
    // auth,
    // signInWithGoogleRedirect,
    signInWithGooglePopup, 
    createUserDocumentFromAuth } from '../../utils/firebase/Firebase'
import { async } from '@firebase/util';


const SignIn = () => {
    //if we wanted to do it with Redirect:

    // useEffect( () => {
    //     const fetchData = async () =>{
    //   const response = await getRedirectResult(auth);
    //   console.log(response)
    //     }
    //     fetchData()
    // }, [])


    const logGoogleUser = async () => {
        const { user } =  await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }


  return (
    <div>
       <h1>Sign In</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        <SignUpForm />
    </div>
  )
}

export default SignIn