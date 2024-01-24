import React from 'react'
import { useState } from 'react'

function SignUp() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSignIn = async () => {
      try{
         const response =await fetch("http://localhost:3000/users",{
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: {email, password}})
         })

         if (response.ok) {
            const user = await response.json();
            console.log('Sign in successfully:', user);
          } else if (response.status === 422) {
            const errorResponse = await response.json();
            console.error('Sign in failed:', errorResponse);
          } else {
            console.error('Sign in failed:', response.statusText);
          }
        } catch (e) {
          console.error('Error during signing in:', e);
        }
    }


  return (
    <div>
        hey new user
      <div>
            <input type='email' value={email} placeholder='email' onChange={(e) =>setEmail(e.target.value)}></input>
            <input type='password' value={password} placeholder='password' onChange={(e) =>setPassword(e.target.value)}></input>
            <input type='password' value={passwordConfirmation} placeholder='password confirmation' onChange={(e) =>setPasswordConfirmation(e.target.value)}></input>
            <button onClick={handleSignIn}>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp