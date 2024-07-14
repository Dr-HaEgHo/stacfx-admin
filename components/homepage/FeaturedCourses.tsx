import Image from 'next/image'
import React from 'react'
import CoursesCard from './CoursesCard'

export interface DataItem {
    id: number;
    title: string;
    added: string;
    duration: string;
    price: string;
};

const courses = [
    { id: 1, title: "The Fundamentals of FX trading - Beginner to Advanced", added: "Dec 29, 2023 | 9:00am", duration: "3h 20m", price: "FREE" },
    { id: 2, title: "The Fundamentals of FX trading - Beginner to Advanced", added: "Dec 29, 2023 | 9:00am", duration: "3h 20m", price: "FREE" },
    { id: 3, title: "The Fundamentals of FX trading - Beginner to Advanced", added: "Dec 29, 2023 | 9:00am", duration: "3h 20m", price: "FREE" },
    { id: 4, title: "The Fundamentals of FX trading - Beginner to Advanced", added: "Dec 29, 2023 | 9:00am", duration: "3h 20m", price: "FREE" },
];

const FeaturedCourses = () => {
    return (
        <div className='w-full py-16 flex max-lg:flex-col-reverse items-center gap-6' >
            <div className='w-full lg:w-[40%]' >
                <span className='text-[10px] xl:text-xs leading-[12px] xl:leading-[14px] tracking-[15px] text-labelGrey'>LEARN WITH STACFX</span>
                <h3 className='text-[32px] xl:text-[40px] text-primary2 mb-2 font-[700]'>Featured Courses</h3>
                <p className='text-xs xl:text-sm font-400 leading-[20px] xl:leading-[25px] text-labelGrey mb-6'> Discover the power of forex trading with StacFX Academy.
                    Our courses and programs equip you with the essential knowledge and strategies to excel in the dynamic world of foreign exchange, empowering you to make confident trading decisions.</p>
                <div className="flex items-center gap-2">
                    <button className='buttons-2 !px-8 flex items-center gap-2 !text-sm !font-[300]' >
                        Know More
                        <Image 
                            src={require('../../assets/icons/circleArrow.png')}
                            alt='stacfx.com'
                            className='w-[20px]'
                            loading='lazy'
                        />
                    </button>
                    <button className='buttons-line !px-8 flex items-center gap-2 !text-sm !font-[300]' >
                        View Courses
                    </button>
                </div>
            </div>
            <div className='w-full lg:w-[60%] aspect-[1.25] lg:grid grid-cols-2 grid-rows-2 gap-4 ' >
                {
                    courses && courses.map((item, i) => (
                        <div className={`w-full h-full rounded-2xl overflow-hidden shadow-lg ${i !== 0 ? 'max-lg:hidden' : 'block'}`}>
                            <CoursesCard data={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedCourses;