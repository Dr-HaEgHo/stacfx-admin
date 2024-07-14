import { createSlice } from "@reduxjs/toolkit";
import { courseData } from "@/types";
import { getAllCourses, getLatestCourses, getOnboardingVideos, getOngoingCourses, updateOnboardingData } from "./courseAction";

interface coursesState {
  loading: boolean;
  updateLoading: boolean;
  latestLoading: boolean;
  ongoingLoading: boolean;
  onboardingData: courseData[]
  courses: courseData[];
  latestCourses: courseData[];
  ongoingCourses: courseData[];
}

const initialState: coursesState = {
  loading: false,
  updateLoading: false,
  latestLoading: false,
  ongoingLoading: false,
  courses: [],
  onboardingData: [],
  latestCourses: [],
  ongoingCourses: [],
};

export const authSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //============================================================== TO FETCH ALL ONBOARDING COURSES
    builder.addCase(getOnboardingVideos.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(getOnboardingVideos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.onboardingData = payload.onboarding as unknown as courseData[] || undefined
    }),
    builder.addCase(getOnboardingVideos.rejected, (state) => {
      state.loading = false;
    });


    //============================================================== TO UPDATE ALL ONBOARDING COURSES
    builder.addCase(updateOnboardingData.pending, (state) => {
      state.updateLoading = true;
    }),
    builder.addCase(updateOnboardingData.fulfilled, (state, { payload }) => {
      state.updateLoading = false;
    }),
    builder.addCase(updateOnboardingData.rejected, (state) => {
      state.updateLoading = false;
    });
    
    //============================================================== TO FETCH ALL COURSES
    builder.addCase(getAllCourses.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getAllCourses.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.courses = payload.courses as unknown as courseData[] || undefined
    }),
    builder.addCase(getAllCourses.rejected, (state, { payload }) => {
      state.loading = false;
    });


    //============================================================== TO FETCH LATEST COURSES
    builder.addCase(getLatestCourses.pending, (state, { payload }) => {
      state.latestLoading = true;
    }),
    builder.addCase(getLatestCourses.fulfilled, (state, { payload }) => {
      state.latestLoading = false;
      state.latestCourses = payload.latest as unknown as courseData[] || undefined
    }),
    builder.addCase(getLatestCourses.rejected, (state, { payload }) => {
      state.latestLoading = false;
    });

    //============================================================== TO FETCH LATEST COURSES
    builder.addCase(getOngoingCourses.pending, (state, { payload }) => {
      state.ongoingLoading = true;
    }),
    builder.addCase(getOngoingCourses.fulfilled, (state, { payload }) => {
      state.ongoingLoading = false;
      state.ongoingCourses = payload.enrolled as unknown as courseData[] || undefined
    }),
    builder.addCase(getOngoingCourses.rejected, (state, { payload }) => {
      state.ongoingLoading = false;
    });
  },
});

export const { } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer; 