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
  },
})

export const { setStopwatchResult, deleteAllResults } = stopwatchSlice.actions
export const selectResults = state => state.results
export default stopwatchSlice.reducer
