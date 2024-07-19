"use client"

import Image from "next/image"

import Modal from "./Modal"
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import LoginModal from "./LoginModal"
import CustomButton from "../forms/CustomButton"
import { useState } from "react"
import Categories from "../addproperty/Categories"

const AddPropertyModal = () => {
    const addPropertyModal = useAddPropertyModal()

    // states
    const [currentStep, setCurrentStep] = useState(1)
    const [dataCategory, setDataCategory] = useState('')
    
    //  set data
    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const content = (
        <>
            {currentStep == 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">Choose Category</h2>

                    <Categories
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />

                    <CustomButton
                        label='Next'
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ): (
                <p>step 2</p>
            )}
        </>
    )

    return (
        <>
            <Modal 
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal