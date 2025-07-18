import React from 'react'
import AuthSide from './AuthSide'
import RegisterForm from './RegisterForm'

export default function Register() {
  return (
    <div className='flex'>
        <div className='w-[50%]'>
            <AuthSide/>
        </div>
        <div className='w-[50%]'>
            <RegisterForm/>
        </div>

    </div>
  )
}
