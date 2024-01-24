import React from 'react'
import { useState } from 'react';


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = async () => {
      try{
         const response =await fetch("http://localhost:3000/users/sign_in",{
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: {email, password}})
         })

         if (response.ok) {
            const user = await response.json()
            console.log('Sign in successfully:', user)
         }else {
            console.error('Sign in failed:', response.statusText)
         }
      } catch (e) {
         console.e('Error during signing in:', e)
      }
    }


  return (
    <div>
      Remember me
        <div>
            <input type='email' value={email} placeholder='email' onChange={(e) =>setEmail(e.target.value)}></input>
            <input type='password' value={password} placeholder='password' onChange={(e) =>setPassword(e.target.value)}></input>
            <button onClick={handleSignIn}>Log In</button>
        </div>
      
    </div>
  )
}

export default Login