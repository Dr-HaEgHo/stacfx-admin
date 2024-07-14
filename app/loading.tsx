'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const titles = ['Stocks', 'Trends', 'News', 'Analysis', 'Speculation'];

const Loading = () => {

    const [content, setContent]: [count: string, setCount: Function] = useState('Farmers');
    const [count, setCount]: [count: number, setCount: Function] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount: number) => prevCount + 1);

        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures that the effect runs only once on mount


    useEffect(() => {
        if (count === titles.length) {
            setCount(0)
        }

        setContent(titles[count])
    }, [count])


    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/login')
    //     }, 5000)
    // }, [])

  return (
      <main className="w-full h-screen bg-white flex items-center justify-center ">
          <div className='flex flex-col gap-4 items-center justify-center' >

              <div className='h-[70px] w-[70px] flex items-center justify-center' >
                  <Image 
                      src={require('../assets/images/logo.png')}
                      alt='hometown-admin.com'
                      className='spinning-logo'
                  />
              </div>

              <div className='w-[120px] h-[30px]  relative overflow-hidden' >
                  <p className='swipe-right text-primary2 font-semibold' > {content}</p>
              </div>
          </div>
      </main>
  )
}

export default Loading