"use client";
import AnalyticCard, { ChartCard } from "@/components/AnalyticCard";
import Table from "@/components/Table";
import { getLatestCourses, getOngoingCourses } from "@/store/courses/courseAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const res = [
  {id: 1, name: "Peter Daniel", email:"peterdaniel@gmail.com", phone: "+23412345678", status: "Active", },
  {id: 2, name: "Peter Daniel", email:"peterdaniel@gmail.com", phone: "+23412345678", status: "Active", },
  {id: 3, name: "Peter Daniel", email:"peterdaniel@gmail.com", phone: "+23412345678", status: "Inactive", },
  {id: 4, name: "Peter Daniel", email:"peterdaniel@gmail.com", phone: "+23412345678", status: "Active", },
  {id: 5, name: "Peter Daniel", email:"peterdaniel@gmail.com", phone: "+23412345678", status: "Active", },
  {id: 6, name: "Peter Daniel", email:"peterdaniel@gmail.com", phone: "+23412345678", status: "Active", },
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
    <div className="w-full h-full ">
      <div className="dash-container">
        <div className="w-full pt-[24px] 2xl:pt-[34px] ">
          
          {/* WECLOME TEXT TOP */}
          <div className="w-full ">
            <h1 className="text-xl text-headDesc font-[400]">Students</h1>
          </div>

          {/* ANALYTICS SECTION COUNTS */}
          <div className="w-full grid grid-cols-3 gap-4 mt-6">
            {/* Analytics Cards mapped Grid container */}
            <div className="rounded-lg grid grid-cols-2 col-span-2 gap-6">
              <AnalyticCard count={467} label="Total Students" icon={require('../../../assets/icons/Users_Group.svg')} to="" />
              <AnalyticCard count={325} label="Active Students" icon={require('../../../assets/icons/Users_Group.svg')} to="" />
            </div>

            {/* Card showing the chart */}
            {/* <div className="">
              <ChartCard/>
            </div> */}
          </div>


          {/* STUDENT MANAGEMENT TEXT TOP */}
          

          {/* TABLE SHOWING STUDENT DATA */}
          <div className="w-full mt-12">
            <Table data={{ results: res}} loading={false}/>
          </div>



        </div>
      </div>
    </div>
  );
};

export default page;
