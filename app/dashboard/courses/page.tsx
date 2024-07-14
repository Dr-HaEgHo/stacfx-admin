'use client'
import Load from '@/components/Load'
import CourseCategories from '@/components/courses/CourseCategories'
import CourseDetails from '@/components/courses/CourseDetails'
import WatchCourse from '@/components/courses/WatchCourse'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

    const search = useSearchParams()

    const [id, setId] = useState<string | null>('');
    const [ watch, setWatch] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const queryId = new URLSearchParams(search).get("id")
    const queryWatch = new URLSearchParams(search).get("watch")
    const ongoing = useAppSelector((state) => state.courses.ongoingCourses);

    
    const getId = () =>{
        setId(queryId)
        console.log('query id: ',queryId)
        console.log('id: ',id)
    }

    const getWatch =() =>{
        setWatch((queryWatch as unknown) as boolean)
        console.log('queryWatch: ', queryWatch);
        console.log('Watch: ', watch);
    }

    useEffect(() => {
        getId();
        getWatch();
    }, [])
    
    return (
        <>

            {
                loading && (<Load/>)
            }
            {
            queryId === null && queryWatch === null ?  <CourseCategories/> : null
            }
            {
                queryId !== null && queryWatch === null ? (<CourseDetails ongoing={ongoing}/>) : null
            } 
            {
                queryId !== null && queryWatch !== null ? (<WatchCourse ongoing={ongoing}/>) : null
            }

        </>
    )
}

export default page;