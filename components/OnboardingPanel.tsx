"use client";
import { courseData, onboardingPanelProps } from "@/types";
import Image from "next/image";
import React, { FC, useContext, useEffect } from "react";
import { LoadButton } from "./Load";
import useProgress from "@/hooks/useProgress";
import { useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/context/Context";

const OnboardingPanel: FC<onboardingPanelProps> = ({
  data,
  action,
  loading,
  // setIsPlaying,
  // setCurrentId
}) => {

  const router = useRouter();
  const search = useSearchParams();

  const completed = data?.filter((item) => item.isCompleted === true);
  const { progress } = useProgress(data ? data.length : 0, completed.length);
  const queryWatch = new URLSearchParams(search).get("watch");
  const { currentCourse, setCurrentCourse, setNowPlaying } = useContext(GlobalContext)
  const queryId = new URLSearchParams(search).get("id");

  
  const loopAndSetPlayingVideo = () => {
    if(!data){
      return
    }
    for(let i: number = 0; i < data?.length; i++){
      if(data[i].isCompleted === true){
        console.log("this is the data here guys: ",data[i]);
        setCurrentCourse(data[i])
        // router.push( `?id=${data[i + 1].id}&watch=${data[i + 1].videos}`)
        break;
      }else if(data[0].isCompleted === false){
        setCurrentCourse(data[0])
        // router.push(`?id=${data[0].id}&watch=${data[0].videos}`)

        break;
      }
    }
  }

  const manuallySetPlayingVideo = (id: string, video: string, course:courseData) => {
    setCurrentCourse(course)
    // router.push( `?id=${id}&watch=${video}`)
    // setCurrentId(id)
  }

  useEffect(() => {
    if(currentCourse === null){
      return
    }
    setNowPlaying(currentCourse.videos)
  }, [currentCourse])
  
  useEffect(() => {
    action()
    loopAndSetPlayingVideo()
  }, [])


  return (
    <main className="w-full p-[13px] 2xl:p-[17px] bg-onPanelGray rounded-2xl flex flex-col">
      {/* BUTTON TO GO TO DASHBOARD */}
      <div className="w-full ">
        <button className="w-full p-[10px] hoverActive bg-blueGray rounded flex items-center justify-center gap-[10px]">
          <Image 
            src={require("../assets/icons/leftarrow.png")}
            alt="stackfx.com"
            className="w-[18px]"
          />
          <p className="text-primary text-[13px] font-[200]">Go to Dashboard</p>
        </button>
      </div>

      {/* ONBOARDING PROGRESS */}
      <div className="w-full mt-[29px] 2xl:mt-[39px] mb-[38px] 2xl:mb-[50px]">
        <h3 className="text-primary2 text-sm font-normal mb-[9px] 2xl:mb-[12px]">
          Onboarding Progress {}
        </h3>

        {/* PROGRESS BAR */}
        <div className="w-full h-[5px] bg-progressTrack rounded-full mb-2">
          <div
            style={{
              width: progress ? `${progress}%` : 0,
            }}
            className="bg-progress h-full rounded-full transition duration-400"
          />
        </div>

        <p className="text-greytxt text-xs font-normal">
          {progress ? progress : 0}% Complete
        </p>
      </div>

      {/* ONBOARDING STAGES */}
      <div className="w-full flex flex-col">
        {loading === true ? (
          <LoadButton />
          ) : (
            <>
            {/* MAPPED STAGES */}
            {data ? (
              data.map((item) => (
                <div
                  key={item.id}
                  onClick={() => manuallySetPlayingVideo(item.id, item.videos, item)}
                  style={{
                    pointerEvents: item.isCompleted === false && item.videos !== queryWatch ? 'none' : 'auto'
                  }}
                  className="transition duration-200 w-full flex items-center justify-between py-[9px] cursor-pointer px-1 rounded hover:bg-blackHover"
                >
                  <p className={`${item.isCompleted || item.videos === queryWatch ? 'text-headDesc' : 'text-greytxt' }  text-[13px] font-normal`}>
                    {item.title}
                  </p>

                  { item.id == queryId ? (
                    <Image 
                        src={require("../assets/icons/play.svg")}
                        alt="stacfx.com"
                        className="w-[20px]"
                      />) : (
                    <>
                    {item.isCompleted === true ? (
                      <Image 
                        src={require("../assets/icons/bluetick.png")}
                        alt="stacfx.com"
                        className="w-[20px]"
                      />
                    ) : (
                      <Image 
                        src={require("../assets/icons/notick.png")}
                        alt="stacfx.com"
                        className="w-[18px]"
                      />
                    )}
                    </>
                  )}
                  
                </div>
              ))
            ) : (
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <p className="text-center text-primary text-sm">
                  Something went wrong
                </p>
                <button
                  onClick={action}
                  className="buttons-2 !py-2 text-white text-sm"
                >
                  Refresh
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default OnboardingPanel;
