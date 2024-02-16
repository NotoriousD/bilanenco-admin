import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { rootReducer, RootState } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
