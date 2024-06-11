'use client'

import React from 'react'

import Modal from './Modal'
import useSignupModal from '@/app/hooks/useSignupModal'
import CustomButton from '../forms/CustomButton'

const SignupModal = () => {
  const signupModal = useSignupModal()

  const content = (
    <>
      <form>
        <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
      </form>

      <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
        error message
      </div>

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