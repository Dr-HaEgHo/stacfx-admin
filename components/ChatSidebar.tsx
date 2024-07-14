'use client'

import { ArrowCircleLeft, CloseCircle, Logout, MenuBoard, People, Profile } from 'iconsax-react'
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/context/context';
// import { useGlobalContext } from '@/context/context';
// import Prompt from './Prompt';/
// import { useAppDispatch } from '@/store/hooks';
// import { logout } from '@/store/auth/authSlice';

const ChatSidebar = () => {

    const location = usePathname();
    const router = useRouter();
    const param = useParams();
    const search = useSearchParams()
    // const dispatch = useAppDispatch()
    const queryRoom = new URLSearchParams(search).get('room')
    
    const useGlobalContext = useContext(GlobalContext)
    
    
    const [onlineStatus, setOnlineStatus] = useState<string>("online");
    const [logoutOpen, setLogoutOpen] = useState<boolean>(false)
    // const [ active, setActive ] = useState<number>(0);
    const { isActive, setIsActive, openChatNav, setOpenChatNav } = useContext(GlobalContext);

    const sidebarLinks = [
        { id: 1, image: require('../assets/icons/onboarding.png'), title: "FX 101 forum", route: `/chat` },
        { id: 2, image: require('../assets/icons/dash.png'), title: "FX 102 forum", route: "dashboard/chat/1", subRoutes: "/chat/incubatees/new-incubatee", subRoutes1: `/chat/incubatees/${param?.id}` },
        { id: 3, image: require('../assets/icons/profile.png'), title: "FX 103 forum", route: "dashboard/chat", subRoutes1: `/chat/users/${param?.id}` },
        { id: 4, image: require('../assets/icons/courses.png'), title: "FX 104 forum", route: "dashboard/chat/courses", subRoutes1: `/chat/users/${param?.id}` },
        { id: 5, image: require('../assets/icons/chat.png'), title: "FX 105 forum", route: "dashboard/chat/chat", subRoutes1: `/chat/users/${param?.id}` },
        { id: 6, image: require('../assets/icons/chat.png'), title: "FX 106 forum", route: "dashboard/chat/downloads", subRoutes1: `/chat/users/${param?.id}` },
        { id: 7, image: require('../assets/icons/settings.png'), title: "FX 107 forum", route: "dashboard/chat/settings", subRoutes1: `/chat/settings/${param?.id}` },
    ]


    const handleSwitchForums = (title : string) => {
        if(!title){
            return;
        }
        toggleChatNav()
        const hashedId = title.split(" ").join('-')
        router.push(`/dashboard/chat?room=${hashedId}`)
    }

    const toggleChatNav = () => {
        setOpenChatNav(!openChatNav)
    }


    const handleLogout = () => {
        // dispatch(logout())
        router.push('/login')
    }

    const handleCancel = () => {
        setLogoutOpen((prev: boolean) => prev = !prev)
    }


    return (
        <div className='w-full h-full border-sidebarDiv border-r-[0.2px] bg-white ' >
            <div className="h-full w-full relative slim-scroll flex flex-col">


                {/* USER DETAILS SECTION */}
                <div className='w-full flex flex-col relative items-start gap-4 mb-[20px] mt-[38px] pl-[26px] pr-[10px] 2xl:mt-[47px] 2xl:mb-[27px]' >
                    <h5 className='text-[9px] 2xl:text-[11px] text-greytxt ' >ROOMS</h5>
                    <ArrowCircleLeft onClick={toggleChatNav} size='28' variant="Bulk" className='text-greytxt absolute top-1/2 right-0 transform -translate-y-1/2 hovers-text block lg:hidden'/>
                </div>

                {/* LINKS SECTION */}
                <div className="w-full ">



                    {/* MAIN LINKS */}

                    <div className="w-full flex flex-col items-start py-2">
                        {sidebarLinks?.map((item) => (
                            <div onClick={() => {
                                // router.push(item.route)
                                handleSwitchForums(item?.title)
                                setIsActive(item?.id)
                            }} className={`w-full cursor-pointer relative transition duration-200 pl-[26px] border-b border-onPanelGray pr-[10px] py-[13px] 2xl:py-[16px] flex border-primary1 items-center justify-between hover:bg-blueChatHighlightHover active:bg-blueChatHighlightActive`}
                                style={{
                                    color: "#fff",
                                    backgroundColor: queryRoom?.split('-').join(' ') === item.title ? "#E9F3FF" : "",
                                }}
                            >
                                <div
                                    style={{
                                        width: location === item.route || location === item.subRoutes || location === item.subRoutes1 ? 3 : 0
                                    }}
                                    className={`transition duration-200 left-0 bg-appOrange h-[20px] 2xl:h-[26px] absolute`} />

                                <p className={`text-xs 2xl:text-sm text-primary2 `} >{item.title && item.title}</p>
                                <div className='w-[33px] h-5 bg-appOrange rounded-full flex items-center justify-center' >
                                    <p className='text-[10px] 2xl:text-[10px] text-white font-medium leading-3' >355</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    
                </div>


            </div>
        </div>
    )
}

export default ChatSidebar;