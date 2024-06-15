import React, { useState } from 'react'
import { Logo, LogoText } from '../assets'
import Button from '@mui/material/Button';
import GoogleIcon from "@mui/icons-material/Google"

const Form = () => {
    const [isLogin, setisLogin] = useState(false)

    const handleClick = () => {
        setisLogin(prevState => !prevState);
    }

  return (
    <div className='flex flex-col items-center justify-center border-none border-4 border-sky-500 rounded-md bg-gradient-to-r from-sky-300 to-sky-200 mx-8 my-8 p-8 h-full'>
          <div className='flex flex-col items-center mb-2'>
              <img src={LogoText} alt="" className='w-1/3 h-auto mb-4' />
              <h1 className='font-sans text-3xl font-bold text-sky-800 text-opacity-80'>Welcome to Flick!</h1>
          </div>
          <form action="" className='h-auto mb-1 p-2 w-2/3'>
              <div className=' p-2 flex flex-col'>
                  <label htmlFor="email" className='mb-1 text-md text-sky-950'>Email</label>
                  <input type="email" name="email" id="" className='p-2 bg-transparent border border-sky-700 rounded-md border-2 hover:shadow-md focus: outline-none focus:ring-1 text-sm font-sans'/>
              </div>
              <div className='p-2 flex flex-col'>
                  <label htmlFor="password" className='mb-1 text-md text-sky-950'>Password</label>
                  <input type="password" name="password" id="" className='p-2 bg-transparent border border-sky-700 rounded-md border-2 hover:shadow-md focus: outline-none focus:ring-1 text-sm' />
              </div>
          </form>
          <p className='text-sky-950 w-2/3 text-sm flex items-end justify-end p-1 mr-4 mb-1 font-semibold hover:text-sky-700 cursor-pointer' onClick={handleClick}>{isLogin ? `New User? Sign up here` : `Already registered?`}</p>
          <Button variant="contained" className='w-1/3'>{ isLogin ? `Login` : `Sign up`}</Button>
          <div
                className='flex items-center justify-between gap-16 m-2'>
                <div className='w-24 h-[1px] rounded-md bg-white'></div>
                <p className='text-white'>Or</p>
                <div className='w-24 h-[1px] rounded-md bg-white'></div>
          </div>
          <div>
              <Button variant="outlined" startIcon={<GoogleIcon />}>
                  Sign In with Google
              </Button>  
          </div>
    </div>
  )
}

export default Form
