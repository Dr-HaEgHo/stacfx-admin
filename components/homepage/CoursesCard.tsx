import Image from 'next/image';
import React, { FC } from 'react'
import { DataItem } from './FeaturedCourses';

export type DataProps = {
    data: DataItem;
}

const CoursesCard: FC<DataProps> = ({ data }) => {

    return (
        <div className='w-full h-full rounded-xl relative flex flex-col justify-between overflow-hidden shadow' >


            {/* IMAGE IN THE BACKGROUND */}
            <div className='w-full absolute left-1/2 transform -translate-x-1/2 z-0' >
                <Image 
                    src={require('../../assets/images/hourglass.jpg')}
                    alt='stacFx.com'
                    className='w-full h-full object-cover'
                />
            </div>

            {/* BADGE AND MORE */}
            <div className='w-full flex items-center justify-end p-[10px] 2xl:p-3 z-10' >
                {/* <button className='bg-appOrange rounded py-[5px] px-[10px] text-[13px] 2xl:text-[15px] text-white' >New</button> */}

                <button className='bg-blackTrans20 flex items-center justify-center  w-5 h-5 rounded-full' >
                    <Image 
                        src={require('../../assets/icons/moreVert.png')}
                        alt='stacFx.com'
                        className='w-[18px]'
                    />
                </button>
            </div>

            {/* WHITE AREA WITH CONTENT */}
            <div className='w-full h-[10%] bg-primar z-10  flex flex-col gap-1' >

                {/* TITLE AND NAME OF INSTRUCTOR */}
                <div className='bg-white pt-[8px] px-[16px] 2xl:py-[20px]' >
                    <h3 className='text-[14px] 2xl:text-[16px] text-black' >{data.title}</h3>
                    <p className='text-greytxt text-[10px] 2xl:text-xs font-[100]' >ADDED <span className='font-[500]' >{data?.duration}</span></p>
                </div>

                {/* DURATION */}
                <div className='px-[16px]' >
                    <p className='text-greytxt text-[10px] 2xl:text-xs font-[100]' >Duration {data?.added}</p>
                </div>


                {/* ONBOARDING PROGRESS */}
                {/* <div className='w-full ' > */}

                {/* PROGRESS BAR */}
                {/* <div className='w-full h-[8px] bg-progressTrack2 rounded-full mb-2' >
                        <div className={`w-[${Math.floor(data?.completed / data?.total * 100)}%] bg-progress2 h-full rounded-full`} />
                    </div> */}


                {/* <p className='text-black text-xs font-normal' >{Math.floor(data?.completed / data?.total * 100)}% Complete <span className='text-greytxt text-xs font-normal' >( {data?.completed} of {data?.total} complete  )</span></p> */}
                {/* </div> */}


            </div>
            <div className='self-end w-full py-3 px-5 bg-primaryLight' >
                <p className='text-xs font-[300] text-primary2' >Price: <span className='font-[500]' >FREE</span></p>
            </div>
        </div>
    )
}

export default CoursesCard;