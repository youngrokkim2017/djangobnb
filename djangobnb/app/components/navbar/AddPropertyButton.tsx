"use client"

import React from 'react'

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'

const AddPropertyButton = () => {
  const addPropertyModal = useAddPropertyModal()

  const airbnbYourHome = () => {
    addPropertyModal.open()
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