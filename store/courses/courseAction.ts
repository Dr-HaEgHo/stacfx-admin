import { baseUrl } from "@/config";
import { courseData, loginType, signUpType } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";
import cogoToast from "cogo-toast";

// const baseUrl = process.env.BASE_URL
type updateDataType = {
  readyData : {
    onboarding: courseData[]
  }
}

// ================================================================= Fetch Onboarding
export const getOnboardingVideos = createAsyncThunk(
  "getOnboardingVideos",
  async ( arg, { rejectWithValue, getState }
  ) => {
    try {
      // const token = getState().auth.token
      const res = await fetch('http://localhost:5050/0');
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Welcome to the onboarding, please take your onboarding before you can proceed')
        return res.json();
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
        } else {
        cogoToast.error('Something went Wrong too')
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Update Onboarding
export const updateOnboardingData = createAsyncThunk(
  "updateOnboardingData",
  async ( { readyData }: updateDataType, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      // const token = getState().auth.token
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(readyData)
      }
      const res = await fetch('http://localhost:5050/0', options);
      if (res.status === 200 || res.status === 201) {
        dispatch(getOnboardingVideos())
        return res.json();
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
        } else {
        cogoToast.error('Something went Wrong too')
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch All Courses
export const getAllCourses = createAsyncThunk(
  "getAllCourses",
  async ( arg, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const res = await fetch('http://localhost:5050/1');
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Sign up successful')
        return res.json();
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch All Courses
export const getLatestCourses = createAsyncThunk(
  "getLatestCourses",
  async ( arg, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const res = await fetch('http://localhost:5050/2');
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Sign up successful')
        return res.json();
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch All Courses
export const getOngoingCourses = createAsyncThunk(
  "getOngoingCourses",
  async ( arg, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const res = await fetch('http://localhost:5050/3');
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Sign up successful')
        return res.json();
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);



// ================================================================= LOG IN
export const login = createAsyncThunk(
  "login",
  async ( values: loginType, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const res = await axios.post(
        `${baseUrl}/login/`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      
      if (err.response.status === 400) {
        cogoToast.success('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);
