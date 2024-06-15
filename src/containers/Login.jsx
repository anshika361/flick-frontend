import React from 'react'
import {Form} from "../components"
import { Community, Logo } from '../assets'

const Login = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 min-h-screen bg-gradient-to-r from-sky-950 to-sky-800'>
            <div className='flex items-center justify-center p-8'>
                <Form />
            </div>
            <div className='hidden md:flex items-center justify-center'>
                <img src={Community} alt="" className='w-2/3' />
            </div>
      </div>
  )
}

export default Login
