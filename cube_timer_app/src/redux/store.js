import { configureStore } from '@reduxjs/toolkit'
import stopwatchReducer from './slices/stopwatchSlice'

const store = configureStore({
  reducer: {
    results: stopwatchReducer,
  },
})

export default store
