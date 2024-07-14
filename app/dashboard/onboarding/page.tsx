'use client'
import OnboardingPanel from '@/components/OnboardingPanel';
import { GlobalContext } from '@/context/Context';
import { getOnboardingVideos, updateOnboardingData } from '@/store/courses/courseAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const page = () => {

    const search = useSearchParams()

    const dispatch = useAppDispatch();
    const onboardingData = useAppSelector((state) => state.courses.onboardingData);
    const isLoading = useAppSelector(state => state.courses.updateLoading)
    const queryId = new URLSearchParams(search).get("id")
    const queryWatch = new URLSearchParams(search).get("watch")
    const {nowPlaying} = useContext(GlobalContext)

    const [loading, setLoading] = useState<boolean>(false);
    // const [isPlaying, setIsPlaying] = useState('')
    // const [currentId, setCurrentId] = useState<string>('')

    const fetchOnboardingCourses = () => {
        dispatch(getOnboardingVideos())
    }

    const updateDBAndReloadPage = () => {
        let updated = onboardingData;
        let updatedData = updated.map((item) => {
          if(item.id.toString() === queryId){
            return {...item, isCompleted: true}
          }
          return item
        })
        let readyData = {
            onboarding: updatedData
        }
        console.log('this is the ready data',readyData)
        dispatch(updateOnboardingData({readyData}))
    }

    const onVideoEnd = () => {
        updateDBAndReloadPage()
    }
    

    // useEffect(() => {
    //     fetchOnboardingCourses()
    // }, [])

    useEffect(() => {
        isLoading ? setLoading(true) : setLoading(false)
    }, [isLoading]);

    return (
        <div className='w-full h-full bg-white'>
            <div className='dash-container' >
                <div className="w-full pt-[26px] 2xl:pt-[34px] xl:max-w-[1200px] ">
                    
                    {/* TOP WITH HEADER DESCRIPTIONS */}
                    <div className='flex flex-col items-start gap-[8px] 2xl:gap-3' >
                        <h3 className='text-lg 2xl:text-xl text-headDesc ' >Onboarding</h3>
                        <p className='text-[13px] text-greytxt ' >Watch welcome video to complete onboarding process</p>
                    </div>
                
                    
                    {/* VIDEO AND COMPONENT */}
                    <div className='flex flex-col-reverse lg:flex-row  mt-[30px] 2xl:mt-[36px] items-stretch gap-[18px] 2xl:gap-[24px]' >
                        <div className='flex flex-[1]' >
                            <OnboardingPanel data={onboardingData} loading={loading} action={() => fetchOnboardingCourses()}/>
                        </div>

                        <div className='flex flex-[2.8] items-center justify-center rounded-2xl overflow-hidden'>
                            <video src={nowPlaying ? nowPlaying as unknown as string : ''} controls autoPlay={true} onEnded={onVideoEnd} className='w-full h-full object-cover' />
                        </div>
                    </div>
                    
                
                
                
                </div>
            </div>
        </div>
    )
}

export default page;