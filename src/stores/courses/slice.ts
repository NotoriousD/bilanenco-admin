import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const COURSES_FEATURE_KEY = 'courses'

interface CoursesState {}

const initialState: CoursesState = {
  error: null,
  deepLink: null,
  otp: null,
  requestId: null,
  isAuth: false,
  status: null,
  isSumbitting: false,
  isSubmitted: false,
}

const coursesSlice = createSlice({
  name: COURSES_FEATURE_KEY,
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<any>) => {
    },
  },
})

export const {} = coursesSlice.actions

export const courses = coursesSlice.reducer
