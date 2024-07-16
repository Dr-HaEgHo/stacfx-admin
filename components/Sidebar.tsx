'use client'

import { CloseCircle, CloseSquare, Logout, MenuBoard, People, Profile } from 'iconsax-react'
import Image from 'next/image';
import React, { Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { links } from './homepage/Navbar';
import Link from 'next/link';
import { GlobalContext } from '@/context/Context';
// import Prompt from './Prompt';/
// import { useAppDispatch } from '@/store/hooks';
// import { logout } from '@/store/auth/authSlice';

const Sidebar = () => {

    const location = usePathname();
    const router = useRouter();
    const param = useParams();
    // const dispatch = useAppDispatch();


    const { mainSidebarOpen, setMainSidebarOpen} = useContext(GlobalContext)

    const [onlineStatus, setOnlineStatus] = useState("online");
    const [logoutOpen, setLogoutOpen] = useState(false)
    

    const sidebarLinks = [
        { id: 2, image:require('../assets/icons/dash.png'), title: "Dashboard", route: "/dashboard", subRoutes: "/dashboard/incubatees/new-incubatee", subRoutes1: `/dashboard/incubatees/${param?.id}` },
        { id: 4, image:require('../assets/icons/courses.png'), title: "Courses", route: "/dashboard/courses", subRoutes1: `/dashboard/users/${param?.id}` },
        { id: 3, image:require('../assets/icons/Users_Group2.svg'), title: "Students", route: "/dashboard/students", subRoutes1: `/dashboard/users/${param?.id}` },
        { id: 3, image:require('../assets/icons/profile.png'), title: "Announcements", route: "/dashboard/announcements", subRoutes1: `/dashboard`},
        { id: 5, image:require('../assets/icons/chat.png'), title: "Stac Hub", route: "/dashboard/chat", subRoutes1: `/dashboard/users/${param?.id}` },
        // { id: 6, image:require('../assets/icons/chat.png'), title: "Templates & Downloads", route: "/dashboard/downloads", subRoutes1: `/dashboard/users/${param?.id}` },
        { id: 7, image:require('../assets/icons/settings.png'), title: "Settings", route: "/dashboard/settings", subRoutes1: `/dashboard/settings/${param?.id}` },
    ]

    const handleLogout = () => {
        // dispatch(logout())
        router.push('/login')
    }

    const toggleSidebar = () => {
        setMainSidebarOpen(!mainSidebarOpen)
    }

    const handleCancel = () => {
        setLogoutOpen((prev: boolean) => prev = !prev)
    }

    return (
        <div className='w-full h-screen sidebar-bg border-sidebarDiv border-r-[0.2px] relative'>
            
            <div className='w-full h-full absolute top-0 left-0'>
                <Image 
                    src={require('../assets/images/sidebar.png')}
                    alt='sidebar'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className="h-full w-full relative slim-scroll flex flex-col">

                <div className='w-full lg:hidden flex items-center justify-center pt-10 z-[999999999999999999999999]'>
                    <CloseCircle onClick={toggleSidebar} size="30" className="text-white hoverActive" variant='Bulk'/>
                </div>

                {/* TOP  */}
                <div className="w-full py-6  2xl:py-10  flex flex-col items-center justify-center">
                    <div className='w-[50%] flex items-center justify-center ' >
                        <Image 
                            src={require('../assets/images/fullLogo.png')}
                            alt='stacfx.com'
                            className='w-full'
                        />
                    </div>
                </div>

                
                {/* USER DETAILS SECTION */}
                <div className='w-full flex flex-col items-center gap-4 mb-[38px] mt-[20px] 2xl:mt-[27px] 2xl:mb-[47px]' >
                    <div className='w-[48px] h-[48px] rounded-full overflow-hidden flex items-center justify-center'>
                        <Image 
                            src={require('../assets/images/Avatar.png')} 
                            alt='stacfx.com'
                        />
                    </div>
                    <div className='w-full flex flex-col items-center gap-1' >
                        <h2 className='text-base text-white font-[400] text-center' >Kenny Michael</h2>
                        <p className='text-xs text-userEmail font-[200] text-center' >kkmichaellll@gmail.com</p>
                    </div>
                </div>

                {/* LINKS SECTION */}
                <div className="w-full ">   

                    {/* MAIN LINKS */}

                    <div className="w-full flex flex-col items-start gap-1 py-2">
                        {sidebarLinks?.map((item) => (
                            <div key={item.id} onClick={() => {
                                router.push(item.route)
                                toggleSidebar()
                            }} className={`w-full cursor-pointer relative transition duration-200 pl-[38px] py-[12px] 2xl:py-[15px] flex border-primary1 items-center gap-4 hover:bg-whiteHover active:bg-whiteActive`}
                                style={{
                                    color: "#fff",
                                    backgroundColor: location === item.route || location === item.subRoutes || location === item.subRoutes1 ? "#2A66AE" : "",
                                }}
                            > 
                                <div
                                    style={{
                                        width: location === item.route || location === item.subRoutes || location === item.subRoutes1 ? 3 : 0
                                    }}
                                    className={`transition duration-200 left-0 bg-appOrange h-[20px] 2xl:h-[26px] absolute`} />
                                
                                <div className='w-5 h-5' >
                                    <Image 
                                        src={item.image }
                                        alt='stacfx.com'
                                        className='w-full'
                                    /> 
                                </div>
                                <p className={`text-xs 2xl:text-sm text-white font-[200]`} >{item.title && item.title}</p>
                            </div>
                        ))}
                    </div>


                    {/* SYSTEM LINKS */}


                    {/* <div className="w-full flex flex-col items-start gap-2 py-3">
                        <div onClick={() => {
                            setLogoutOpen((prev: boolean) => prev = true)
                        }} className={`w-full cursor-pointer transition duration-200 p-2 flex border-primary1 items-center gap-4 hover:bg-sidebarTxtHover active:bg-sidebarTxtActive`} >
                            <Logout color="#D92C20" />
                            <p className={`text-xs 2xl:text-sm font-normal text-error`} >Logout</p>
                        </div>
                    </div> */}
                </div>


      





            </div>
        </div>
    )
}

export const SidebarMobile =() => {

    const { isSidebarOpen, setIsSidebarOpen} = useContext(GlobalContext)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className={`transition duration-500 w-full fixed right-0 bg-white z-10 p-4 border-b border-primary`} 
        style={{
            top: isSidebarOpen ? '0%' : '-100%',
            height: '90vh'
        }}>
            <div className='w-full flex items-center justify-between'>
                {/* LOGO FOMR MOBILE*/}
            <a href='/' className='w-[90px] block lg:hidden'>
                <Image 
                    src={require('../assets/images/logoblack.png')}
                    alt='stacfx.com'
                    className='w-full'
                />
            </a>
                <CloseSquare onClick={toggleSidebar} className='text-primary transition duration-200 w-10 min-w-10 h-10 cursor-pointer hoverActive' variant="Bold" />
            </div>


             {/* NAV */}
             <div className='flex h-full flex-col gap-[40px] w-full items-center justify-center' >
                <ul className='flex w-[70%] max-w-[400px] flex-col items-center gap-[40px]' >
                    {
                        links && links.map(link => (
                            <a key={link?.id} href={link?.route} className='w-full flex items-center py-2 rounded transition duration hover:bg-blackHover active:bg-blackActive'><li className='text-sm 2xl:text-base text-center text-headDesc w-full'>{link?.title}</li></a>
                        ))
                    }
                </ul>
            
                <Link href="/signup" className=''>
                    <button className='buttons-2 flex items-center gap-1' >
                        <p className='text-xs 2xl:text-sm text-white' >Get Started</p>
                        <Image 
                            src={require('../assets/icons/circleArrow.png')}
                            alt='stacfx.com'
                            className='w-[18px]'
                        />
                    </button>
                </Link>
            </div>


        </div>
    )
}

export default Sidebar;