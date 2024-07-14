'use client'
import ChatNavbar from '@/components/ChatNavbar'
import ChatSidebar from '@/components/ChatSidebar'
import { GlobalContext } from '@/context/Context'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {

    // const [active, setActive] = useState(0)
    const { openChatNav, setOpenChatNav} = useContext(GlobalContext)

    const handleSubmit = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    return (
        <div className='w-full h-full relative flex flex-col ' >

            {/* CHAT NAVBAR */}
            <div className='bg-white w-full sticky top-0 z-10' >
                <ChatNavbar />
            </div>


            <div className='w-full flex-[1] max-h-full flex items-start relative ' >

                {/* CHATROOM PANELS */}
                <div style={{
                    left: openChatNav === true ? 0 : -260
                }} className='h-full flex-[1] min-w-[200px] bg-orange-400 fixed lg:sticky left-0 top-0 z-[999999999999999] lg:z-0' >
                    <ChatSidebar />
                </div>

                {/* CHAT PAGE */}
                <div className='flex-[5] h-full' >
                    <div className='py-3 w-[94%] mx-auto mt-[20px] 2xl:mt-[30px] rounded-2xl bg-white px-[20px] 2xl:px-[28px] h-[90%]  relative' >
                        
                        {/* CHAT PAGES */}
                        <div className='w-full h-[90%] scroll-chat'>
                            {children}
                        </div>


                        {/* SEND FORM */}
                        <div className='w-full bg-white p-1 rounded-2xl flex items-center gap-[14px] 2xl:gap-[16px]' >
                            <button className='w-[38px] h-[38px] rounded-full bg-primary2 flex items-center justify-center' >
                                <Image 
                                    src={require('../../../assets/icons/addplus.png')}
                                    alt='stacfx.com'
                                    className='w-full'
                                /> 
                            </button>
                            <form className='w-full relative' >
                                <input type="text" placeholder='Type your text here...' className='w-full rounded-full bg-chatinput border-2 border-chatinput p-[12px] text-[12px] text-chatinputtext focus:outline-none focus:border-2 focus:border-primary2' />
                                <button type='submit' onClick={handleSubmit} className='w-[30px] h-[30px] p-1 rounded-full 2xl:w-[30px] 2xl:h-[30px] absolute right-[30px] top-1/2 transform -translate-y-1/2 hover:bg-sidebarTxtHover active:bg-blueChatHighlightActive '>
                                    <Image 
                                        src={require('../../../assets/icons/send.png')}
                                        alt='stacfx.com'
                                        className='w-full'
                                    />    
                                </button>  
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default layout