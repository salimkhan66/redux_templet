import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from '../Reducers/ReducerSlice'
export const store = configureStore({
  reducer: {
  counter: counterSlice.reducer, 
  },
})