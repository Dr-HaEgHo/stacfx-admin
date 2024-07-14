import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="w-full bg-primary2 py-[3rem] relative z-0 overflow-hidden">
        <div className="absolute h-[140%] z-10 top-1/2 transform -translate-y-1/2 -right-[200px]">
            {/* <Image 
                src={require('../../assets/images/logomark.png')}
                alt='stacfx.com'
                className='h-full w-auto' 
                loading='lazy'
            /> */}
        </div>
      <div className="w-full py-20">

        {/* TITLE SECTION */}
        <div className="w-full text-center">
          <h3 className="text-xl lg:text-[32px] xl:text-[40px] text-white mb-2 font-[700]">
            Join Our Newsletter
          </h3>
        </div>

        {/*  */}
        <div className="w-[30%] max-w-[520px] m-auto text-center">
            <p className="text-white font-light text-[12px] lg:text-[15px]">Sign up to receive our newsletter and stay up-to-date with the latest forex trading insights, tips, and exclusive offers.</p>
        </div>

        {/* THE INPUT FIELD AREA */}
        <div className="w-[40%] mx-auto bg-white p-[6px] rounded-md max-w-[620px] mt-10">
            <form action="" className="flex w-full items-center gap-1">
                <input type="email" placeholder="Enter your email..." className="w-full border-2 border-white ml-4"/>
                <button className='buttons-2 !px-12 !py-3 flex items-center whitespace-nowrap gap-2 !text-sm !font-[300]' >
                    Subscribe
                    <Image 
                        src={require('../../assets/icons/circleArrow.png')}
                        alt='stacfx.com'
                        className='w-[20px]'
                        loading='lazy'
                    />
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default NewsLetter;
