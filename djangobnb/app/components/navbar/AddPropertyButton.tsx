"use client"

import React from 'react'

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'
import useLoginModal from '@/app/hooks/useLoginModal'

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId
}) => {
  const loginModal = useLoginModal()
  const addPropertyModal = useAddPropertyModal()

  const airbnbYourHome = () => {
    if (userId) {
      addPropertyModal.open()
    } else {
       loginModal.open()
    }
  }

  return (
    <div 
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
      onClick={airbnbYourHome}
    >
      Djangbnb
    </div>
  )
}

export default AddPropertyButton