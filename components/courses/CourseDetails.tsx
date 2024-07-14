import Link from "next/link";
import LatestCard from "../LatestCard";
import Image from "next/image";
import OngoingCard from "../OngoingCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useContext, useEffect, useState } from "react";
import {
  getLatestCourses,
  getOngoingCourses,
} from "@/store/courses/courseAction";
import CardLoader from "../CardLoader";
import SomethingWentWrong from "../SomethingWentWrong";
import { CourseProps, courseData } from "@/types";
import { GlobalContext } from "@/context/context";

const latest = [
  {
    id: 1,
    title: "The Fundamentals of FX trading - Beginner to Advanced",
    total: 20,
    completed: 0,
    instructor: "Kore Ayobami",
  },
  {
    id: 2,
    title: "The Fundamentals of FX trading - Beginner to Advanced",
    total: 20,
    completed: 0,
    instructor: "Kore Ayobami",
  },
  {
    id: 3,
    title: "The Fundamentals of FX trading - Beginner to Advanced",
    total: 20,
    completed: 0,
    instructor: "Kore Ayobami",
  },
  // { id: 4, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 0, instructor: "Kore Ayobami" },
];

const ongoing = [
  {
    id: 1,
    title: "The Fundamentals of FX trading - Beginner to Advanced",
    total: 20,
    completed: 4,
    instructor: "Kore Chiefdrummer",
  },
  {
    id: 2,
    title: "The Fundamentals of FX trading - Beginner to Advanced",
    total: 20,
    completed: 10,
    instructor: "Kore Chiefdrummer",
  },
  {
    id: 3,
    title: "The Fundamentals of FX trading - Beginner to Advanced",
    total: 20,
    completed: 12,
    instructor: "Kore Chiefdrummer",
  },
  // { id: 4, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 12, instructor: "Kore Chiefdrummer" },
];

const CourseDetails: FC<CourseProps> = ({ ongoing }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const search = useSearchParams();
  const queryId = new URLSearchParams(search).get("id");
  const latest = useAppSelector((state) => state.courses.latestCourses);
  const isLatestLoading = useAppSelector(
    (state) => state.courses.latestLoading
  );
  const isOngoingLoading = useAppSelector(
    (state) => state.courses.ongoingLoading
  );

  const [latestLoading, setLatestLoading] = useState<boolean>(false);
  const [ongoingLoading, setOngoingLoading] = useState<boolean>(false);
  const { currentCourse, setCurrentCourse } = useContext(GlobalContext);

  const filterCourse = (arr: courseData[]) => {
    let newArr: courseData | null = null;
    arr?.filter((item) => {
      if (item.id.toString() === queryId) {
        newArr = item;
      }
    });

    return newArr;
  };

  const nextCourse = (arr: courseData[]) => {
    let newArr: courseData | null = null;
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i].id.toString() === queryId) {
        newArr = arr[i + 1];
      }
    }

    return newArr;
  };

  useEffect(() => {
    dispatch(getLatestCourses());
    dispatch(getOngoingCourses());

    setCurrentCourse(filterCourse(ongoing));
  }, []);

  useEffect(() => {
    setCurrentCourse(filterCourse(ongoing));
  }, [queryId]);

  useEffect(() => {
    if (isLatestLoading) {
      setLatestLoading(true);
    } else setLatestLoading(false);

    if (isOngoingLoading) {
      setOngoingLoading(true);
    } else {
      setOngoingLoading(false);
    }
  }, [latestLoading, ongoingLoading]);

  return (
    <div className="w-full bg-white ">
      <div className="dash-container">
        <div className="w-full pt-[26px] 2xl:pt-[34px] ">
          {/* TOP BAR WELCOME */}
          <div className="w-full h-fit min-h-[300px] max-h-[420px] relative rounded-xl overflow-hidden flex flex-col items-start justify-center">
            {/* ABSOLUTE BG IMAGE */}
            <div className="w-full z-0 top-0 left-0">
              <Image
                src={currentCourse?.photo as unknown as string}
                width={1024}
                height={1024}
                alt="stacfx.com"
                className="w-full "
              />
            </div>

            <div className="z-10 mt-20 absolute top-1/2 transform -translate-y-1/2 p-10">
              <span className="text-white tracking-widest text-[11px] 2xl:text-[13px] font-[100] ">
                STACFX ACADEMY
              </span>
              <h3 className="text-white text-[28px] 2xl:text-[32px] ">
                {currentCourse?.title}
              </h3>
            </div>
          </div>

          {/* PROGRESS BAR AND BUTTON TO CONTINUE COURSE */}
          <div className="w-full bg-brownGray py-[13px] px-[26px] rounded-2xl mt-6 flex items-center gap-[28px]">
            {/* IN PROGRESS */}
            <div className="z-10">
              <h3 className="text-primary2 font-semibold text-[13px] 2xl:text-[15px]">
                In Progress
              </h3>
              <span className="text-greytxt text-[11px] 2xl:text-[13px] font-[100]">
                Last active 23 hours ago
              </span>
            </div>

            {/* PROGRESS BAR AND PERCENTAGE */}
            <div className="flex-[1] flex flex-col items-start">
              <div className="w-full bg-brownerGray h-[14px] rounded-full mb-2 overflow-hidden">
                <div
                  style={{
                    width: `${
                      currentCourse
                        ? Math.floor(
                            (currentCourse?.completed / currentCourse?.total) *
                              100
                          )
                        : 0
                    }%`,
                  }}
                  className="bg-primary w-1/2 h-full rounded-full"
                />
              </div>
              <span className="text-primary text-[11px] 2xl:text-[13px] font-[100] ">
                {currentCourse
                  ? Math.floor(
                      (currentCourse?.completed / currentCourse?.total) * 100
                    )
                  : 0}
                % Completed
              </span>
            </div>

            {/* BUTTON FOR CTA */}
            <div>
              <div className="hidden lg:block">
                <button
                  onClick={() =>
                    router.push(
                      `/dashboard/courses?id=${currentCourse?.id}&watch=${currentCourse?.videos}`
                    )
                  }
                  className="buttons-2 flex items-center gap-1 !px-16"
                >
                  <p className="text-xs 2xl:text-sm text-white">
                    Continue Course
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* DIVIDER DIV  */}
          <div className="w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]">
            <h3 className=" text-[17px] 2xl:text-[20px]">Latest Lessons</h3>
            <div className="flex-[1] h-[1px] bg-dividerGray" />
            <Link href="/">
              <p className="text-[13px] 2xl:text-[15px] underline">Show All</p>
            </Link>
          </div>

          {/* LATEST COURSES MAPPED OUT */}
          <div className="flex gap-[18px] 2xl:gap-[24px] justify-between">
            {latestLoading === true ? (
              <CardLoader />
            ) : (
              <>
                {latest ? (
                  latest.slice(0, 3).map((item) => (
                    <div className="w-[33%]">
                      <LatestCard
                        data={item}
                        action={() => {
                          router.push(`/dashboard/courses?id=${item.id}`);
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <SomethingWentWrong />
                )}
              </>
            )}
          </div>

          {/* DIVIDER DIV  */}
          <div className="w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]">
            <h3 className=" text-[17px] 2xl:text-[20px]">Ongoing Courses</h3>
            <div className="flex-[1] h-[1px] bg-dividerGray" />
            <Link href="/">
              <p className="text-[13px] 2xl:text-[15px] underline">Show All</p>
            </Link>
          </div>

          {/* ONGOING COURSES MAPPED OUT */}
          <div className="w-full flex items-start gap-[18px] 2xl:gap-[24px] flex-nowrap">
            {ongoingLoading === true ? (
              <CardLoader />
            ) : (
              <>
                {ongoing ? (
                  ongoing.slice(0, 3).map((item) => (
                    <div className="w-[33%]">
                      <OngoingCard
                        data={item}
                        action={() => {
                          router.push(`/dashboard/courses?id=${item.id}`);
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <SomethingWentWrong />
                )}
              </>
            )}
          </div>

          <div className="h-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
