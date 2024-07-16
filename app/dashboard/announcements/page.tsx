"use client";
import AnalyticCard, { ChartCard } from "@/components/AnalyticCard";
import AnnouncementTable from "@/components/AnnouncementTable";
import Table from "@/components/Table";
import { getLatestCourses, getOngoingCourses } from "@/store/courses/courseAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const res = [
  {id: 1, title: "Welcome Back", message:"Welcome back to the middle of the financial year, I hope we all have gathered out due funds", date: "+23412345678", },
  {id: 2, title: "Welcome Back", message:"Welcome back to the middle of the financial year, I hope we all have gathered out due funds", date: "+23412345678", },
  {id: 3, title: "Welcome Back", message:"Welcome back to the middle of the financial year, I hope we all have gathered out due funds", date: "+23412345678", },
  {id: 4, title: "Welcome Back", message:"Welcome back to the middle of the financial year, I hope we all have gathered out due funds", date: "+23412345678", },
  {id: 5, title: "Welcome Back", message:"Welcome back to the middle of the financial year, I hope we all have gathered out due funds", date: "+23412345678", },
  {id: 6, title: "Welcome Back", message:"Welcome back to the middle of the financial year, I hope we all have gathered out due funds", date: "+23412345678", },
]

const page = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const isLatestLoading = useAppSelector(state => state.courses.latestLoading)
  const isOngoingLoading = useAppSelector(state => state.courses.ongoingLoading)

  const [latestLoading, setLatestLoading] = useState<boolean>(false)
  const [ongoingLoading, setOngoingLoading] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getLatestCourses())
    dispatch(getOngoingCourses())
  }, [])

  useEffect(() => {
    if(isLatestLoading){
        setLatestLoading(true)
    }else (
        setLatestLoading(false)
    )

    if(isOngoingLoading){
        setOngoingLoading(true)
    }else{
        setOngoingLoading(false)
    }
  }, [latestLoading, ongoingLoading])

  return (
    <div className="w-full h-full bg-white">
      <div className="dash-container">
        <div className="w-full pt-[24px] 2xl:pt-[34px] ">
          
          {/* WECLOME TEXT TOP */}
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl text-headDesc font-[400]">Announcements</h1>
            <button className='buttons-2 !px-8 !py-2 flex items-center gap-2 !text-sm !font-[400]' >
                      Create New Announcement
                      <Image 
                          src={require('../../../assets/icons/addplus.png')}
                          alt='stacfx.com'
                          className='w-[30px]'
                          loading='lazy'
                      />
                  </button>
          </div>

          {/* ANALYTICS SECTION COUNTS */}
          <div className="w-full grid grid-cols-3 gap-4 mt-6">
            {/* Analytics Cards mapped Grid container */}
            <div className="rounded-lg grid grid-cols-2 col-span-2 gap-6">
            </div>

            {/* Card showing the chart */}
            {/* <div className="">
              <ChartCard/>
            </div> */}
          </div>


          {/* STUDENT MANAGEMENT TEXT TOP */}
          

          {/* TABLE SHOWING STUDENT DATA */}
          <div className="w-full mt-12">
            <AnnouncementTable data={{ results: res}} loading={false}/>
          </div>



        </div>
      </div>
    </div>
  );
};

export default page;
