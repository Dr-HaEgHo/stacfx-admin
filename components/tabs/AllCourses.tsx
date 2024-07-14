import React, { FC, useState } from 'react'
import EmptyCourse from '../Empty'
import ProgressCard from './ProgressCard'
import Loader from '../CardLoader'
import { courseData } from '@/types'
import { useRouter } from 'next/navigation'

export interface courseCatProps {
    data: courseData[];
}

const AllCourses: FC<courseCatProps> = ({data}) => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)

    const routeToLocation = (id: string, video: string) => {
        router.push(`/dashboard/courses?id=${id}`)
    }

    return (
        <>
            {
                loading === true ? (<Loader />) : (

                    <div className={`w-full pt-8 ${data && data.length ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : ''}`} >


                        {
                            // loading === true ? (<Loader/>) :
                            data && data.length ? data.map((item: courseData, index: number) => (

                                <div key={index} className='slide-up'>
                                    <ProgressCard data={item} action={() => routeToLocation(item.id, item.videos)}/>
                                </div>

                            )) : (

                                <EmptyCourse />

                            )
                        }



                    </div>
                ) 
            }
        </>
    )
}

export default AllCourses;