import { async } from '@firebase/util'
import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/Firebase'

const defaultFormFields = {
    displayName: "", 
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields

    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
//confirm password matches
        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }
//see if we have authenticated user with email and password
//then create a user doc from what this returns
        try{
        const { user } = await createAuthUserWithEmailAndPassword(
            email, 
            password
        );
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();

        }catch(error) {
         if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use')
         }
         console.log('user created encountered an error', error)
        }


    }

    const handleChange = (event) =>{
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

  return (
    <div>
        <h1>Sign up with email and password</h1>
        <form onSubmit={handleSubmit}>
          <label>Display name</label>
          <input 
          type='text' 
          required 
          onChange={handleChange} 
          name="displayName"
          value={displayName} 
          />

          <label>Email</label>
          <input 
          type='email' 
          required 
          onChange={handleChange} 
          name="email"
          value={email} 
          />

          <label>Password</label>
          <input 
          type='password' 
          required 
          onChange={handleChange} 
          name="password"
          value={password} 
          />

          <label>Confirm Password</label>
          <input 
          type='password' 
          required 
          onChange={handleChange} 
          name="confirmPassword"
          value={confirmPassword}  
          />
          <button type="submit">Sign up</button>
        </form>
    </div>
  )
}

export default SignUpForm