import { CardData } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react'

const LatestCard: FC<CardData> = ({ data, action }) => {
  return (
      <div onClick={() => action} className='w-full aspect-[1.4] rounded-xl 2xl:rounded-3xl relative flex flex-col justify-between overflow-hidden shadow' >
          

          {/* IMAGE IN THE BACKGROUND */}
          <div className='w-full h-[50%] absolute bg-orange-300 left-1/2 transform -translate-x-1/2 z-0' >
              <Image 
                  src={data.photo}
                  alt='stacFx.com'
                  width={1024}
                  height={1024}
                  className='w-full h-full object-cover'
              />
          </div>

          {/* BADGE AND MORE */}
          <div className='w-full flex items-center justify-between p-[10px] 2xl:p-3 z-10' >
              <button className='bg-appOrange rounded py-[5px] px-[10px] text-[13px] 2xl:text-[15px] text-white' >New</button>
          </div>

          {/* WHITE AREA WITH CONTENT */}
          <div className='w-full h-[50%] 2xl:h-[50%] bg-white z-10 pt-[8px] pb-[10px] px-[16px] 2xl:py-[20px] flex flex-col justify-between gap-2 2xl:gap-4' >
              
              {/* TITLE AND NAME OF INSTRUCTOR */}
              <div className='' >
                  <h3 className='text-[14px] 2xl:text-base text-black' >{data?.title}</h3>
                  <p className='text-greytxt text-[10px] 2xl:text-xs font-[100]' >{ data?.instructor }</p>
              </div>


              {/* DETAILS */}
              <div className='w-full flex items-center justify-between' >
                  <div className='flex items-center gap-1' >
                      <Image 
                          src={require('../assets/icons/book.png')}
                          alt='stacfx.com'
                          className='w-[14px]'
                      />
                      <p className='text-[10px] 2xl:text-xs text-greytxt font-[100]'>12 Lessons</p>
                  </div>

                  <button onClick={action} className='hoverActive flex items-center gap-2 text-greytxt bg-primary p-[6px] rounded'>
                      <p className='text-[11px] 2xl:text-[13px] text-white' >Start Now</p>
                      <Image 
                          src={require('../assets/icons/circleArrow.png')}
                          alt='stacfx.com'
                          className='w-5'
                      />
                  </button>
              </div>

          </div>
    </div>
  )
}

export default LatestCard;