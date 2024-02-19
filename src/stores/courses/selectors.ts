import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../rootReducer'

const getCoursesState = (state: RootState) => state.courses

export const selectCorsesList = createSelector(getCoursesState, (s) => s)
