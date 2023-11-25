import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    setStopwatchResult: (state, action) => {
      state.push(action.payload)
    },
    deleteAllResults: () => {
      return initialState
    },
    deleteResult: (state, action) => {
      return state.filter(time => time.id !== action.payload)
    },
    favoriteResult: (state, action) => {
      return state.forEach(time => {
        if (time.id === action.payload) {
          time.isFavorite = !time.isFavorite
        }
      })
    },
    dnfResult: (state, action) => {
      return state.forEach(time => {
        if (time.id === action.payload) time.isDNF = !time.isDNF
      })
    },
    plusTwoResult: (state, action) => {
      return state.forEach(time => {
        if (time.id === action.payload) time.isPlusTwo = !time.isPlusTwo
      })
    },
  },
})

export const {
  setStopwatchResult,
  deleteAllResults,
  deleteResult,
  favoriteResult,
  dnfResult,
  plusTwoResult,
} = stopwatchSlice.actions
export const selectResults = state => state.results
export default stopwatchSlice.reducer
