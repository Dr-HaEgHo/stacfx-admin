import { useState } from "react";
import AllCourses from "../tabs/AllCourses";
import Enrolled from "../tabs/Enrolled";
import ActiveCourses from "../tabs/ActiveCourses";
import Completed from "../tabs/Completed";
import { useAppSelector } from "@/store/hooks";


const tabs = [
    { id: 1, title: "All Courses", total: 0, },
    { id: 2, title: "Enrolled", total: 0, },
    { id: 3, title: "Active", total: 0, },
    { id: 4, title: "Completed", total: 0, },
]

const courses = [
    { id: 1, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 4, instructor: "Kore Chiefdrummer" },
    { id: 2, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 10, instructor: "Kore Chiefdrummer" },
    { id: 3, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 12, instructor: "Kore Chiefdrummer" },
    { id: 4, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 12, instructor: "Kore Chiefdrummer"},
];


const CourseCategories = () => {

    const [index, setIndex] = useState(0);
    const handleSetTab = (idx: number) => {
        setIndex(idx)
    };
    const courses = useAppSelector(state => state.courses.ongoingCourses)
    const enrolled = useAppSelector(state => state.courses.ongoingCourses)

    return (
        <div className='w-full h-full bg-white ' >
            <div className='dash-container' >
                <div className="w-full pt-[26px] 2xl:pt-[34px] ">

                    {/* TOP WITH HEADER DESCRIPTIONS */}
                    <div className='flex flex-col items-start gap-[8px] 2xl:gap-3 pb-[26px] 2xl:pb-[34px]' >
                        <h3 className='text-lg 2xl:text-xl text-headDesc ' >Profile</h3>
                    </div>


                    {/* TABS SYSTEM */}
                    <div className='w-full' >
                        <ul className='flex w-fit items-center' >
                            {
                                tabs && tabs.map((item, idx) => (
                                    <li
                                        onClick={() => { handleSetTab(idx) }}
                                        style={{
                                            color: idx === index ? "#161C51" : "#1A1A1A"
                                        }}
                                        className='cursor-pointer w-[90px] lg:w-[180px] flex items-center justify-center text-[12px] 2xl:text-[14px] text-headDesc p-[6px] hover:bg-inputBg transition duration-300 rounded'
                                    >
                                        {item.title}
                                    </li>
                                ))
                            }
                        </ul>

                        <div className='h-[1px] hidden lg:block bg-greytxt w-full relative'>
                            <div
                                style={{
                                    left: 180 * index
                                }}
                                className='absolute top-1/2 transform -translate-y-1/2 w-[180px] h-2 bg-primary2 transition duration-300' />
                        </div>
                        <div className='flex justify-between lg:hidden h-[1px] bg-greytxt w-full relative'>
                            <div
                                style={{
                                    left: 90 * index
                                }}
                                className='absolute top-1/2 transform -translate-y-1/2 w-[90px] h-2 bg-primary2 transition duration-300' />
                        </div>
                    </div>


                    <div className='w-full' >  
                        { index === 0 && <AllCourses data={courses} /> }
                        { index === 1 && <Enrolled data={courses} /> }
                        { index === 2 && <ActiveCourses data={courses} /> }
                        { index === 3 && <Completed data={courses} /> }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CourseCategories;