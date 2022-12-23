import React from 'react'
import { useState } from 'react'
import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/Firebase'
import './SignInForm.scss'
import Button from '../button/Button'

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields

    console.log(formFields)

    //Reset form fields to default values 
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
      const { user } =  await signInWithGooglePopup();
      await createUserDocumentFromAuth(user)
  }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
          const response = await signInAuthUserWithEmailAndPassword(
            email,
            password
            );
          console.log(response)
            resetFormFields();

        }catch(error) {
          if(error.code === 'auth/wrong-password') {
            alert('incorrect password for email')
          }else if (error.code === 'auth/user-not-found') {
            alert('no user associated with this email')
          }
         console.log(error)
        }


    }

    //Update form fields when values change
    const handleChange = (event) =>{
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={handleSubmit}>
       
          
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

          <div className='buttons-container'>
          <Button  type="submit">Sign In</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google sign in</Button>
          </div>
        </form>
        
    </div>
  )
}

export default SignInForm