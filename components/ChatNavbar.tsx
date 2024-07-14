'use client'
import { GlobalContext } from '@/context/context'
import { ArrowCircleRight } from 'iconsax-react'
import Image from 'next/image'
import React, { useContext } from 'react'

const ChatNavbar = () => {

   const {openChatNav, setOpenChatNav} = useContext(GlobalContext);

   const toggleChatNav = () => {
    setOpenChatNav(!openChatNav)
   }

  return (
      <div className='w-full bg-white border-b-[1px] border-border py-[7px]' >
          <div className='dash-container' >
              <div className='w-full flex items-center justify-between' >
                  
                  <div className='flex gap-2 items-center'>
                    <ArrowCircleRight onClick={toggleChatNav} size='28' variant="Bulk" className='text-greytxt block lg:hidden hovers-text'/>
                  {/* TITLE */}
                    <h2 className='text-[18px] 2xl:text-[20px] hidden lg:block text-headDesc' >Chats</h2>
                  </div>

                  {/* CHAT ROOM NAME */}
                  <p className='text-[13px] 2xl:text-[15px] text-primary2'>FX Forum 101</p>

                  {/* PARTICIPANTS */}
                  <div className='flex items-center gap-1 lg:gap-4' >
                    
                    {/* Mobile */}
                    <p className='text-[13px] 2xl:text-[15px] block lg:hidden text-greytxt'>23+ </p>
                      
                      {/* USER IMAGES */}
                      <div className='flex items-center' >
                          <div className='h-8 w-8 rounded-full border-[2px] border-white z-[1] ' >
                              
                              <Image 
                                  src={require('../assets/images/user1.png')}
                                  alt='stacfx.com'
                                  className='w-full'
                              />
                          </div>
                          <div className='h-8 w-8 rounded-full border-[2px] border-white z-[1] -mx-[14px]' >
                              
                              <Image 
                                  src={require('../assets/images/user2.png')}
                                  alt='stacfx.com'
                                  className='w-full'
                              />
                          </div>
                          <div className='h-8 w-8 rounded-full border-[2px] border-white z-[1]' >
                              
                              <Image 
                                  src={require('../assets/images/user3.png')}
                                  alt='stacfx.com'
                                  className='w-full'
                              />
                          </div>
                      </div>

                        {/* Tablet upwards */}
                      <p className='text-[13px] 2xl:text-[15px] hidden lg:block text-greytxt'>23+ participants</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ChatNavbar