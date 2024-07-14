'use client';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { GlobalContext } from '@/context/Context';
import React, { useContext } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {

    const { mainSidebarOpen } = useContext(GlobalContext);

    return (
        <div className='w-full h-screen flex items-start bg-dashboardBg'>

            <div style={{
                left: mainSidebarOpen === true ? 0 : -260
            }} className={`fixed lg:sticky top-0 flex flex-1 h-full max-w-[260px] z-[999999999999999999999999999999] `}>
                <Sidebar />
            </div>
            <div className="flex flex-[4.5] h-full flex-col">

                {/* NAVBAR COMPONENT */}
                <div className='w-full bg-white sticky top-0 z-[999]'>
                    <Navbar />
                </div>

                {/* EACH PAGE ROUTED TO FROM THE FILE STRUCTURE */}
                <div className='h-full w-full scroll-2'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default layout