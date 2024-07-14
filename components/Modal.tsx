'use client'
import { ModalProps } from '@/types'
import { CloseSquare } from 'iconsax-react'
import React, { FC, useState } from 'react'

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {

    // STATE


    // FUNCTIONS
    const handleClick = () => {
        setIsOpen((prev: boolean) => prev = !prev)
    }

    return (
        <div className={isOpen === true ? 'modal-bg-open' : 'modal-bg-close'} >
            <div className='w-full h-full relative' >
                <div className={isOpen === true ? 'card-open' : 'card-close'} >
                    <div className='w-full h-full flex flex-col items-center relative p-8' >
                        <CloseSquare onClick={handleClick} size='28' variant='Bold' className='text-sidebarTxt absolute top-3 right-3 hovers-text' />
                

                        {children}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal