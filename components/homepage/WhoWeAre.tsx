import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
    return (
        <div className='w-full py-20 flex max-lg:flex-col items-center gap-6' >
            <div className='max-lg:w-full w-[56%] aspect-[1.5] bg-slate-400' >
                <Image 
                    src={require('../../assets/images/whoweare.png')}
                    alt='whoweare.png'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-full lg:w-[44%]'>
                <span className='text-[10px] xl:text-xs leading-[12px] xl:leading-[14px] tracking-[15px] text-labelGrey'>ABOUT US</span>
                <h3 className='text-[32px] xl:text-[40px] text-primary2 mb-2 font-[700]'>Who We Are</h3>
                <p className='text-xs xl:text-sm font-400 leading-[20px] xl:leading-[25px] text-labelGrey mb-6' >Welcome to STACFX—a hub for empowered traders redefining the forex landscape. Our commitment to excellence offers cutting-edge education, personalized mentorship, and practical hands-on training. Led by seasoned professionals, we're a beacon of trust, providing insights and strategies for confident market navigation.
                    Join STACFX for a journey to financial success and trading mastery.</p>
                <button className='buttons-2 !px-8 flex items-center gap-2 !text-sm !font-[300]' >
                    Know More
                    <Image 
                        src={require('../../assets/icons/circleArrow.png')}
                        alt='stacfx.com'
                        className='w-[20px]'
                        loading='lazy'
                    />
                </button>
            </div>
        </div>
    )
}

export default WhoWeAre