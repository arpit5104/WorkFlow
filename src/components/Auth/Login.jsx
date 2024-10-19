import React, { useState } from 'react'

function Login({handleLogin}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SubmitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail("")
        setPassword("")
    }
    
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
       <div className='border-2 border-emerald-600 p-20 rounded-md '>
            <form onSubmit={(e)=>{SubmitHandler(e)}} className='flex flex-col items-center justify-center gap-2'>
                <input 
                value={email} 
                onChange={(e)=>{setEmail(e.target.value)}} 
                required 
                className='rounded-full bg-transparent text-white border-2 border-emerald-400 px-3 py-2 placeholder:text-zinc-500 outline-none' type="email" placeholder='Enter your email' />
                <input 
                value={password} 
                onChange={(e)=>{setPassword(e.target.value)}} 
                required 
                className='rounded-full bg-transparent text-white border-2 border-emerald-400 px-3 py-2 placeholder:text-zinc-500 outline-none' type="password" placeholder='Enter your password' />
                <button className='bg-emerald-500 py-1 px-20 rounded-full'>Log in</button>

            </form>
       </div>
    </div>
  )
}

export default Login