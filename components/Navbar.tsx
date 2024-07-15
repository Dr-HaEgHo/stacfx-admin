'use client'
import { HambergerMenu, Menu, Notification } from 'iconsax-react'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { SearchInputFade } from './Input'
import { GlobalContext } from '@/context/Context'
// import { Activity } from "@untitled-ui/icons-react";

const Navbar = () => {

    const [isNotification, setIsNotifications] = useState(true)
    const location = usePathname();
    const params = useParams();
    const [searchValue, setSearchValue] = useState('')
    const { mainSidebarOpen, setMainSidebarOpen } = useContext(GlobalContext);

    const toggleSidebar = () => {
        setMainSidebarOpen(!mainSidebarOpen)
    }

    return (
        <div className='w-full bg-white border-b-[1px] border-border py-[7px]' >
            <div className="dash-container">
                <div className="w-full flex items-center justify-between ">


                    {/* LEFT */}
                    {/* <div className='flex flex-col items-start' >
                        <p className='text-smallHeadTxt text-xs 2xl:text-sm ' >Overview</p>
                        <h2 className='text-bigHeadTxt font-semibold text-sm 2xl:text-base '>
                            {location === "/dashboard" && 'Analytics'}
                            {location === "/dashboard/incubatees" && 'Incubatees'}
                            {location === "/dashboard/incubatees/new-incubatee" && 'Add Incubatee'}
                            {location === `/dashboard/incubatees/${params?.id}` && 'Incubatee Details'}
                            {location === "/dashboard/users" && 'Users'}
                            {location === `/dashboard/users/${params?.id}` && 'User Details'}
                        </h2>
                    </div> */}
                    <div className='flex flex-col items-start lg:hidden' >
                        <HambergerMenu onClick={toggleSidebar} size="24" variant='Bulk' className='text-greytxt hoverActive'/>
                    </div>
                    <div className='flex flex-col items-start' >
                        <SearchInputFade
                            placeholder='Type to Search'
                            type='string'
                            setValue={setSearchValue}
                        />
                    </div>



                    {/* RIGHT */}
                    <div className='flex items-center gap-3'>
                        {/* Icon */}
                        <button className='transition duration-200 w-[30px] h-[30px] rounded-[6px] bg-noteIconBtn hover:bg-sidebarTxtHover active:bg-sidebarTxtActive flex items-center justify-center relative'>
                            {isNotification ? (<div className='w-5 h-5' >
                                <Image 
                                    src={require('../assets/icons/note.png')}
                                    alt='stacfx.com'
                                    className='w-full'
                                />
                            </div>) : (<div className='w-5 h-5' >
                                <Image 
                                    src={require('../assets/icons/nonote.png')}
                                    alt='stacfx.com'
                                    className='w-full'
                                />
                            </div>)}
                        </button>
                        <button className='w-[36px] h-[36px] rounded-full bg-noteIconBtn overflow-hidden '>
                            <Image 
                                src={require('../assets/images/Avatar.png')}
                                alt="hometownadmin.com"
                            />
                        </button>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar