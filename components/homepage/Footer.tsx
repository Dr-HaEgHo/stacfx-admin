import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-primary2 py-[5rem] relative z-0 overflow-hidden">
      <div className="container">
        <div className="w-full flex items-start justify-between">

          {/* LOGO AND ADDRESS */}
          <div className="flex flex-col items-start gap-12">
            <Image 
              src={require("../../assets/icons/logofordark.png")}
              alt="logo"
              className="w-40"
            />
            <p className="text-white font-normal leading-[24px]">Museyo Beach, Eleko, <br />
                Lotu Street,<br />
                Off Lekki Free Trade Zone Road. Lagos.
            </p>
          </div>

          {/* Other links */}
          <div className="grid grid-cols-4 gap-20">

            <div className="flex flex-col items-start gap-6">
                <h2 className="text-white font-semibold text-[18px]">Services</h2>
                <p className="text-base text-white font-normal">Rooms Details</p>
                <p className="text-base text-white font-normal">Car Services</p>
                <p className="text-base text-white font-normal">Overnight Booking</p>
                <p className="text-base text-white font-normal">Day Pass Booking</p>
            </div>
            
            <div className="flex flex-col items-start gap-6">
                <h2 className="text-white font-semibold text-[18px]">Support</h2>
                <p className="text-base text-white font-normal">FAQs</p>
                <p className="text-base text-white font-normal">Responsible Hospitality</p>
                <p className="text-base text-white font-normal">Taxes</p>
                <p className="text-base text-white font-normal">Complaints</p>
            </div>

            <div className="flex flex-col items-start gap-6">
                <h2 className="text-white font-semibold text-[18px]">Company</h2>
                <p className="text-base text-white font-normal">About</p>
                <p className="text-base text-white font-normal">History</p>
                <p className="text-base text-white font-normal">Join Us</p>
                <p className="text-base text-white font-normal">Jara For Good</p>
                <p className="text-base text-white font-normal">Partners</p>
            </div>

            <div className="flex flex-col items-start gap-6">
                <h2 className="text-white font-semibold text-[18px]">Legal</h2>
                <p className="text-base text-white font-normal">Claim</p>
                <p className="text-base text-white font-normal">Privacy</p>
                <p className="text-base text-white font-normal">Terms</p>
            </div>

          </div>

        </div>

        <div className="w-full text-white text-xs text-center mt-20">©StacFX Academy 2023.</div>
      </div>

    </div>
  );
};

export default Footer;