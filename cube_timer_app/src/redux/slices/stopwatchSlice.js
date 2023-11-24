import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    setStopwatchResult: (state, action) => {
      state.push(action.payload)
    },
    deleteAllResults: state => {
      return initialState
    },
    deleteResult: (state, action) => {
      return state.filter(time => time.id !== action.payload)
    },
  },
})

export const { setStopwatchResult, deleteAllResults, deleteResult } =
  stopwatchSlice.actions
export const selectResults = state => state.results
export default stopwatchSlice.reducer
