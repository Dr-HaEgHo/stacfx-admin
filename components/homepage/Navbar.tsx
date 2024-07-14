import { Menu } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { SidebarMobile } from '../Sidebar';
import { GlobalContext } from '@/context/Context';

export const links = [
    { id: 1, title: "About", route: "#about", },
    { id: 2, title: "Coaching", route: "#coaching", },
    { id: 3, title: "Courses", route: "#courses", },
    { id: 4, title: "Trading", route: "#trading", },
    { id: 5, title: "Contact", route: "#contact", },
]

const Navbar = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useContext(GlobalContext)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className='w-full bg-white flex items-center justify-between py-4 z-50'>
            <SidebarMobile />
            {/* LOGO FOMR MOBILE*/}
            <a href='/' className='w-[90px] block lg:hidden'>
                <Image 
                    src={require('../../assets/images/logoblack.png')}
                    alt='stacfx.com'
                    className='w-full'
                />
            </a>  
              {/* LOGO FOR DESKTOP AND TAB */}
            <a href='/' className='w-[123px] hidden lg:block'>
                <Image 
                    src={require('../../assets/images/logoblack.png')}
                    alt='stacfx.com'
                    className='w-full'
                />
            </a>    


            {/* NAV */}
            <div className='hidden lg:flex' >
                <ul className='flex items-center gap-[64px]' >
                    {
                        links && links.map(link => (
                            <a key={link?.id} href={link?.route}><li className='text-sm 2xl:text-base text-headDesc' >{link?.title}</li></a>
                        ))
                    }
                </ul>
            </div>
            <Link href="/signup" className='hidden lg:block'>
                <button className='buttons-2 flex items-center gap-1' >
                    <p className='text-xs 2xl:text-sm text-white' >Get Started</p>
                    <Image 
                        src={require('../../assets/icons/circleArrow.png')}
                        alt='stacfx.com'
                        className='w-[18px]'
                    />
                </button>
            </Link>
            <div onClick={toggleSidebar} className='block lg:hidden cursor-pointer p-1 transition duration-200 active:bg-blackHover rounded hoverActive'>
                <Menu color="#2A66AE" variant='Bold' />
            </div>
        </div>
    )
}

export default Navbar;