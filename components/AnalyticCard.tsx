import { AnalyticsCardProps } from "@/types";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import { FC } from "react";

const AnalyticCard: FC<AnalyticsCardProps> = ({count, label, icon, to}) => {
    return (
      <div className="bg-white w-full p-5 rounded-2xl flex items-center     gap-2">
        
        {/* Icon Div Container */}
        <div className="w-[60px] h-[60px] p-[18px]  flex items-center justify-center bg-dashboardBg rounded-lg">
          <Image 
            src={icon}
            alt="total students group icon"
            width={1024}
            height={1024}
          />
        </div>
  
        {/* Count and Label of the card */}
        <div className="flexc flex-[1] flex-col justify-start">
          <h2 className="font-bold text-headDesc text-[22px]">{ count }</h2>
          <p className="text-[13px] text-greytxt font-normal">{label}</p>
        </div>
  
        <div>
          <ArrowRight2  size="20" className="text-headDesc"/>
        </div>
      </div>
    )
  }

  export default AnalyticCard;


  export const ChartCard = () => {
    return (
        <div className="w-full h-full bg-white rounded-lg p-5 flex flex-col items-center ">
            {/* title and filter */}
            <div className="w-full flex items-center justify-between">
                <h3 className="text-headDesc font-semibold text-base">Subscriptions</h3>

                <button className="flex items-center gap-1">
                    <p className="text-greytxt text-sm font-medium">This Week</p>
                    <ArrowDown2 size="18" className="text-greytxt"/>
                </button>
            </div>

            {/* Chart  */}
            <div className="w-full flex-[1]">
                
            </div>

            {/* Key Indicators */}
            <div className="w-full flex items-center gap-3 justify-between">
                <div className="flex gap-1 items-center">
                    <div className="h-[10px] min-w-[10px] bg-primary rounded-full"/>
                    <p className="text-greytxt font-normal text-sm">Pending Subscriptions</p>
                </div>
                <div className="flex gap-1 items-center">
                    <div className="h-[10px] min-w-[10px] bg-primary2 rounded-full"/>
                    <p className="text-greytxt font-normal text-sm">Active Subscriptions</p>
                </div>
            </div>

        </div>
    )
  }