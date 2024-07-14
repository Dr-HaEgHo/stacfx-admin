import Image from 'next/image'
import React from 'react'

const PricingSection = () => {
  return (
    <div className='w-full py-8 h-fit lg:h-[80vh] min-h-[597px] lg:max-h-[620px] max-lg:flex-col flex items-center justify-between gap-6' >
     
      <div className='w-full lg:w-[26%] bg-primary2 h-full rounded-xl py-9 px-4'>
        <h2 className='text-white text-[28px] leading-[36px] font-light mb-5'>Leverage our flexible pricing plans</h2>
        <p className='text-xs text-white leading-[20px] font-[400] mb-3' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide laborum.</p>
        <div className='w-[80%] mx-auto'>
          <Image  src={require('@/assets/images/saly.png')} alt='saly' className='w-full h-full object-cover' />
        </div>
      </div>

      <div className='w-full lg:w-[66%] h-full max-lg:flex-col flex gap-4 ' >

        <div className='w-full lg:w-[54%] h-full rounded-xl py-9 px-4 flex flex-col justify-between bg-primaryLight' >

          <div className='w-full flex items-start justify-between ' >
            <h2 className='text-black font-[700] text-2xl leading-[20px]' >Main Online <br /> Course</h2>
            <p className='text-black font-[400] text-2xl leading-[20px]'>NGN200,000</p>
          </div>

          <div className='pt-5'>
            <p className='text-sm font-[300] leading-[23px]'>Struggling with understanding the markets?
              This course covers introductory topics through advanced strategies which will make you more consistent and profitable. Gain access to 10 course chapters, over 100 webinars, converse with other traders who have gone through the program, and get trading questions answered by Quillan Black.
            </p>
            
            <ul className='w-full px-6 py-4 pb-8 flex flex-col gap-2'>
              <li className='list-disc'><p className='text-sm font-[400] text-primary2'>Lifetime Mentorship</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-primary2'>Facebook Support Group</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-primary2'>Pat and Future Webinars</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-primary2'>Access to All Recorded Content</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-primary2'>24 Hour Access to Online Training</p></li>
            </ul>
          </div>

          <div className='w-full text-center self-end'>
            <button className='buttons-2 min-w-[70%]'>
              Purchase Plan
            </button>
          </div>

        </div>


        <div className='w-full lg:w-[50%] text-white h-full rounded-xl bg-primary py-9 px-4 flex flex-col justify-between' >
          <div className='w-full flex items-start justify-between ' >
            <h2 className='text-white font-[700] text-2xl leading-[20px]' >Main Online <br /> Course</h2>
            <p className='text-white font-[400] text-2xl leading-[20px]'>NGN200,000</p>
          </div>

          <div className='pt-5'>
            <p className='text-sm font-[300] leading-[23px]'>Struggling with understanding the markets?
              This course covers introductory topics through advanced strategies which will make you more consistent and profitable. Gain access to 10 course chapters, over 100 webinars, converse with other traders who have gone through the program, and get trading questions answered by Quillan Black.
            </p>

            <ul className='w-full px-6 py-4 pb-8 flex flex-col gap-2'>
              <li className='list-disc'><p className='text-sm font-[400] text-white'>Lifetime Mentorship</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-white'>Facebook Support Group</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-white'>Pat and Future Webinars</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-white'>Access to All Recorded Content</p></li>
              <li className='list-disc'><p className='text-sm font-[400] text-white'>24 Hour Access to Online Training</p></li>
            </ul>
          </div>

          <div className='w-full text-center self-end'>
            <button className='buttons-2-inv min-w-[70%]'>
              Purchase Plan
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PricingSection