import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div className='w-full h-[90vh] max-h-[720px] flex items-center justify-between bg-primry' >
          
          {/* CONTENT */}
          <div className='w-full lg:w-1/2'>
              <p className='text-xs lg:text-sm text-smallHeadTxtGray tracking-[4px] font-[300]' >StacFx Academy</p>
              <h1 className='text-[60px] font-[600] mb-4 leading-[1.1] bg-gradient-to-r from-primary2 to-appOrange w-fit bg-clip-text text-transparent'>Learn to Trade <br /> Like A Pro</h1>
              <p className='greytxt text-sm text-greytxt mb-4 font-[300]' >We help intermediates, beginners and experienced traders learn how to attain their money goals over the long run in the markets.</p>
              <div className='flex items-center gap-2 mb-4' >
                  <button className='buttons-2 !px-8 flex items-center gap-2 !text-sm !font-[400]' >
                      Enroll Now
                      <Image 
                          src={require('../../assets/icons/circleArrow.png')}
                          alt='stacfx.com'
                          className='w-[20px]'
                          loading='lazy'
                      />
                  </button>
                  <button className='buttons-2 !px-8 !bg-onPanelGray !text-primary !text-sm !font-[400]' >Learn more</button>
              </div>
              <div className='flex flex-col items-start gap-2' >
                  {/* USER IMAGES */}
                  <div className='flex items-center' >
                      <div className='h-10 w-10 rounded-full border-[2px] border-white z-[1] ' >

                          <Image 
                              src={require('../../assets/images/user1.png')}
                              alt='stacfx.com'
                              className='w-full'
                          />
                      </div>
                      <div className='h-10 w-10 rounded-full border-[2px] border-white z-[1] -mx-[10px]' >

                          <Image 
                              src={require('../../assets/images/user2.png')}
                              alt='stacfx.com'
                              className='w-full'
                          />
                      </div>
                      <div className='h-10 w-10 rounded-full border-[2px] border-white z-[1]' >

                          <Image 
                              src={require('../../assets/images/user3.png')}
                              alt='stacfx.com'
                              className='w-full'
                          />
                      </div>
                      <div className='h-10 w-10 rounded-full border-[2px] relative border-white z-[1] overflow-hidden -mx-[10px]' >

                          <div className='w-full h-full bg-[rgba(0,0,0,0.5)] absolute flex items-center justify-center' >
                              <p className='text-white text-[11px] font-[400]' >+2k</p>
                          </div>
                          <Image 
                              src={require('../../assets/images/user3.png')}
                              alt='stacfx.com'
                              className='w-full'
                          />

                      </div>
                  </div>
                  <p className='text-xs text-greytxt font-[300]' >
                      2k people already enrolled. <br />
                      Get started today!
                  </p>
              </div>
          </div>


          {/* IMAGE AND FLOATING COMPONENTS */}
          <div className='w-1/2 relative hidden lg:block' >
              <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1 bg-primaryLight py-3 px-[18px] rounded-lg min-w-[270px]'>
                  <div className='bg-primary w-5 h-5 rounded-full' />
                  <p className='text-xs text-headDesc' >First hand knowledge</p>
              </div>
              <div className='absolute top-[30%] right-0 flex items-center gap-1 bg-orangeLight px-3 py-[10px] rounded-lg '>
                  <div className='bg-appOrange w-5 h-5 rounded-full' />
                  <p className='text-xs text-headDesc' >First hand knowledge</p>
              </div>
              <Image 
                  src={require('../../assets/images/manlaptop.png')}
                  alt='manwithlaptop.png'
              />
          </div>
    </div>
  )
}

export default Hero