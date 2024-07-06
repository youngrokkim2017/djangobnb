'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import Modal from './Modal'
import useSignupModal from '@/app/hooks/useSignupModal'
import CustomButton from '../forms/CustomButton'
import apiService from '@/app/services/apiService'

const SignupModal = () => {
  const signupModal = useSignupModal()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    }

    const response = await apiService.post('/api/auth/register', formData)

    if (response.access) {
      // handleLogin

      signupModal.close()

      router.push('/')
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error
      })

      setErrors(tmpErrors)
    }
  }

  const content = (
    <>
      <form
        action={submitSignup}
        className='space-y-4'
      >
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
      </form>

      {errors.map((error, index) => {
        return (
          <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
            {error}
          </div>
        )
      })}

      <CustomButton
        label="Submit"
        onClick={() => console.log('test')}
      />
    </>
  )

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  )
}

export default SignupModal