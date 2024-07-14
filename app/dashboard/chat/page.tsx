import Image from 'next/image'
import React from 'react'

const chats = [
    { id: 1, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: false, image: require('../../../assets/images/IMG1.png') },
    { id: 2, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: false, image: require('../../../assets/images/IMG1.png') },
    { id: 3, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: false, image: require('../../../assets/images/IMG1.png') },
    { id: 4, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: true, image: require('../../../assets/images/IMG1.png') },
    { id: 5, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: true, image: require('../../../assets/images/IMG1.png') },
    { id: 6, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: false, image: require('../../../assets/images/IMG1.png') },
    { id: 7, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: true, image: require('../../../assets/images/IMG1.png') },
    { id: 8, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: false, image: require('../../../assets/images/IMG1.png') },
    { id: 9, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: false, image: require('../../../assets/images/IMG1.png') },
    { id: 10, first_name: "Khenny", last_name: "Michael", message: "Hi guys! what are we studying today?", time: "10:30pm", isUser: false, image: require('../../../assets/images/IMG1.png') },
]

const page = () => {
    return (
        <div className=' flex flex-col gap-[14px] 2xl:gap-[14px]' >
            {
                chats?.map((item) => (
                    <div style={{
                        justifyContent: item.isUser ? "flex-end" : "flex-start"
                    }} className='w-full flex justify-start' >

                        {/* CHAT CARD */}
                        <div
                            style={{
                                flexDirection: item.isUser === true ? "row-reverse" : "row",
                            }}
                            className=' w-full flex items-start gap-1' >

                            {/* IMAGE */}
                            <div className='w-[30px] h-[30px] rounded-full overflow-hidden' >
                                <Image 
                                    src={item?.image}
                                    alt={item?.first_name}
                                    className='w-full'
                                />
                            </div>


                            {/* MESSAGE */}
                            <div
                                style={{
                                    alignItems: item.isUser === true ? "flex-end" : "flex-start",
                                }}
                                className='flex flex-col w-full max-w-[50%]' >
                                <p className='text-[11px] text-nameTag '>Khenny Michael</p>
                                <div className={`${item?.isUser === true ? "mechat" : "outchat"}`} >
                                    <p
                                        style={{
                                            color: item.isUser === true ? "#FFF" : "#000"
                                        }}
                                        className='text-[12px] 2xl:text-[14px]' >This is what I said to the man!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default page