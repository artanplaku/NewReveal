import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/Firebase'
import './SignUpForm.scss'
import Button from '../button/Button'

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

    //Reset form fields to default values 
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
        try{
            //Authenticate user with email and password
        const { user } = await createAuthUserWithEmailAndPassword(
            email, 
            password
        );
            //Create user document from authenticated user
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();

        }catch(error) {
         if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use')
         }
         console.log('user created encountered an error', error)
        }


    }

    //Update form fields when values change
    const handleChange = (event) =>{
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={handleSubmit}>
          <div className='group'>
         
          <label className={`${displayName.length ? 'shrink' : ''} form-input-label`}>
            Display name
          </label>
          <input
          className='form-input'
          type='text' 
          required 
          onChange={handleChange} 
          name="displayName"
          value={displayName} 
          />
          </div>
          
          <div className='group'>
          <label className={`${email.length ? 'shrink' : ''} form-input-label`}>
            Email
          </label>
          <input
          className='form-input' 
          type='email' 
          required 
          onChange={handleChange} 
          name="email"
          value={email} 
          />
          </div>
        
          <div className='group'>

          <label className={`${password.length ? 'shrink' : ''} form-input-label`}>
            Password
            </label>
          <input 
          className='form-input'
          type='password' 
          required 
          onChange={handleChange} 
          name="password"
          value={password} 
          />
          </div>

          <div className='group'>

          <label className={`${confirmPassword.length ? 'shrink' : ''} form-input-label`}>Confirm Password</label>
          <input 
          className='form-input'
          type='password' 
          required 
          onChange={handleChange} 
          name="confirmPassword"
          value={confirmPassword}  
          />
          </div>
          <Button buttonType='google' type="submit">Sign up</Button>
        </form>
        
    </div>
  )
}

export default SignUpForm