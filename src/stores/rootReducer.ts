import { combineReducers } from '@reduxjs/toolkit'

import { courses } from './courses'

export const rootReducer = combineReducers({
  courses,
})

export type RootState = ReturnType<typeof rootReducer>
