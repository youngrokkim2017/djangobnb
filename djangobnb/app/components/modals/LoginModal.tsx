'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import Modal from './Modal'
import useLoginModal from '@/app/hooks/useLoginModal'
import CustomButton from '../forms/CustomButton'
import apiService from '@/app/services/apiService'
import { handleLogin } from '@/app/lib/actions'

const LoginModal = () => {
  const loginModal = useLoginModal()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password
    }

    const response = await apiService.post('/api/auth/register', JSON.stringify(formData))

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      loginModal.close();

      router.push('/')
    } else {
      setErrors(response.non_field_errors);
    }
}

  const content = (
    <>
      <form
        action={submitLogin}
        className='space-y-4'
      >
        <input 
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder="Your e-mail address" 
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
        />
        <input 
          type="password" 
          placeholder="Your password" 
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
        />

        {errors.map((error, index) => {
          return (
            <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
              {error}
            </div>
          )
        })}
        <CustomButton
          label="Submit"
          onClick={submitLogin}
        />
      </form>
    </>
  )

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  )
}

export default LoginModal