'use client'

import React from 'react'

import Modal from './Modal'
import useLoginModal from '@/app/hooks/useLoginModal'
import CustomButton from '../forms/CustomButton'

const LoginModal = () => {
  const loginModal = useLoginModal()

  const content = (
    <>
      <form>
        <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
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
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  )
}

export default LoginModal