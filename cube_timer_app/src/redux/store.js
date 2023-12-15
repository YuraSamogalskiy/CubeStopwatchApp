import { configureStore } from '@reduxjs/toolkit'
import stopwatchReducer from './slices/stopwatchSlice'
import averageSlice from './slices/averageSlice'

const store = configureStore({
  reducer: {
    results: stopwatchReducer,
    averages: averageSlice,
  },
})

export default store
