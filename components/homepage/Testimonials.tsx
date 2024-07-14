import { useMultiply } from "@/hooks/useMultiply";
import Image from "next/image";
import { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const pics = [
    {id: 1, img: require('../../assets/images/IMG1.png')}, 
    {id: 2, img: require('../../assets/images/IMG2.png')}, 
    {id: 3, img: require('../../assets/images/IMG3.png')}, 
] 

const ReviewCard = () => {

    return (
        <div className={`w-full lg:w-[520px] lg:aspect-[1.5] bg-primary2 rounded-3xl p-10 flex flex-col justify-between items-center`}>
            <Image  
                src={require('../../assets/icons/quote.png')}
                alt="quote"
                className="w-12"
            />
            <p className="text-white text-base text-center font-normal leading-relaxed">The best customer service I ever experienced. Every staff I encountered was amazing. Blessing was outstandingly amazing. Looking for a serene Heaven on Earth location? Jara Beach is the deal. ....it was a wonderful experience.</p>

            <div>
              <p className="w-full text-white text-base font-semibold"> Umar Dalorima</p>
              <div className="flex items-center mt-1 gap-[1px]">{
                useMultiply(5, <Image 
                  src={require('../../assets/icons/star.png')}
                  alt="quote"
                  className="w-5"
                />)
              }</div>
            </div>
        </div>
    )
}

const Testimonials = () => {

  return (
    <div>
      <div className="w-full py-20">


        {/* TITLE SECTION */}
        <div className="w-full text-center mb-20">
          <span className="text-[10px] xl:text-xs leading-[12px] xl:leading-[14px] tracking-[15px] text-labelGrey">
            TESTIMONIALS
          </span>
          <h3 className="text-[32px] xl:text-[40px] text-primary2 mb-2 font-[700]">
            What People Think About US
          </h3>
          
        </div>

        {/* SWIPER WITHTHE CARDS */}
        <div className=" mx-auto mb-10">
          <Swiper
              spaceBetween={0}
              slidesPerView={3}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
              effect='fade'
              loop={true}
              shortSwipes
              style={{
                width:"",
                margin: 'auto',
                display : "flex",
                justifyContent:"center",
                gap: 20
              }}
          >
              {
                  pics?.map((item) => (<SwiperSlide>
                      <div className='mx-4' >
                        <ReviewCard/>
                      </div>
                  </SwiperSlide>))
              }
              
          </Swiper> 
        </div>

      </div>
    </div>
  );
};

export default Testimonials;