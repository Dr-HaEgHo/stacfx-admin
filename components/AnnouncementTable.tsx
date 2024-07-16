'use client'
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'
import TableShimmerLoader from './TableShimmerLoader';
import EmptyTable from './EmptyTable';
import { AnnouncementTableProps, TableProps } from '@/types';
import Image from 'next/image';
import { More } from 'iconsax-react';
// import moment from 'moment';


const AnnouncementTable:FC<AnnouncementTableProps> = ({ data, loading }) => {

    const [sortedResults, setSortedResults] = useState([] as any)
    const [domLoaded, setDomLoaded] = useState(false);
    const router = useRouter();



    const sortResults = () => {
        if (data.results) {
            console.log("results in table:::", data.results)
            const dataCopy: any[] = [...data.results]
            const newSortedResults = dataCopy.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            setSortedResults(newSortedResults)
        }
    }

    useEffect(() => {
        sortResults()
    }, [])

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (<>
        {
            domLoaded && (<div className='w-full bg-white'>
                <table className='w-full'>
                    <thead className='w-full bg-dashboardBg border-tableStroke p-[22px] pb-5 '>
                        <tr className='w-full flex items-center px-2 justify-between'>
                            <th className='table-header-1' >
                                Title
                            </th>
                            <th className='table-header-1 !flex-[2]' >
                                Message
                            </th>
                            <th className='table-header-1' >
                                Date
                            </th>
                            <th className='table-header-1 justify-center' >
                                Action
                            </th>
                        </tr>
                    </thead>


                    <tbody className={`flex flex-col gap-4 ${loading && 'animate-pulse w-full flex flex-col mt-4 px-4 mb-4'}`} >

                        {loading ? (<TableShimmerLoader />) : (
                            <>
                                {
                                    data && data.results ? data.results.map((item: any) => (
                                        <tr onClick={() => {
                                            router.push(`/dashboard/incubatees/${item?.id}`)
                                        }} key={item.id} className='w-full flex items-center px-2 justify-between border-b border-tableStroke hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer'>
                                            <td className='py-3 flex flex-1 gap-2 items-center text-black font-[400] text-xs 2xl:text-[15px]'>
                                                {item.title}
                                            </td>
                                            <td className='py-3 flex flex-1 text-email font-normal text-sx 2xl:text-[15px]'>
                                                {item.message}
                                            </td>
                                            <td className='py-3 flex flex-1 text-email font-normal text-sx 2xl:text-[15px]'>
                                                {item.date}
                                            </td>
                                            <td className='py-3 flex flex-1 justify-center flex-col items-center'>
                                                {/* <p className='text-head text-xs 2xl:text-sm ' >{moment(item.created_at).format("Do, MMM YYYY")}</p> */}
                                                {/* <p className='text-head text-[8px] 2xl:text-[8px]' >at {moment(item.created_at).format("hh:mm a")}</p> */}
                                                <span className='bg-dashboardBg rounded-full w-5 h-5 flex items-center justify-center hoverActive font-[900] text-2xl'>⁝</span>
                                            </td>
                                        </tr>
                                    )) : (<EmptyTable text='Oops, No incubatees' subtext='Sorry, there are no incubatees currently' />)
                                }
                            </>
                        )}

                    </tbody>
                </table>
            </div>)
        }
    </>)
}
export default AnnouncementTable;