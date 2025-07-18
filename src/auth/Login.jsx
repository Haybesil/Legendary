import React from 'react'
import AuthSide from './AuthSide'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <div className='flex'>
        <div className='w-[50%]'>
            <AuthSide/>
        </div>
        <div className='w-[50%]'>
            <LoginForm/>
        </div>

    </div>
  )
}
