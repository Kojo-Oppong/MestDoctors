import React from 'react';
import { useState } from 'react';

const Login = () => {

  const [state, setState] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {

    event.preventDefault();

  }

  return (
    <form className='min-h-[80vh] flex items-center px-2 sm:px-0'>
      <div className='flex flex-col gap-3 m-auto items-center p-4 sm:p-8 w-full max-w-xs sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Create Account" : "Log in"} sign up to book appointment</p>

        { state === 'Sign Up' && 
        <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required/>
        </div>
        }
        

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.email)} value={email} required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.password)} value={password} required />
        </div>

        <div className='bg-primary text-white w-full py-2 rounded-md text-base text-center cursor-pointer'><button>{state === 'Sign Up' ? "Create Account" : "Login"}</button></div>
        {
          state === 'Sign Up'
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary cursor-pointer'>Login</span></p>
            : <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary cursor-pointer'>Click here</span></p> 
        }
      </div>
    </form>
  )
}

export default Login
