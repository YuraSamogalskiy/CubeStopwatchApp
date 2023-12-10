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
    bestAndWorst: state => {
      return state.sort((a, b) => {
        const timeA =
          a.hours * 3600000 +
          a.minutes * 60000 +
          a.seconds * 1000 +
          a.milliseconds
        const timeB =
          b.hours * 3600000 +
          b.minutes * 60000 +
          b.seconds * 1000 +
          b.milliseconds

        return timeB - timeA
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
  bestAndWorst,
} = stopwatchSlice.actions
export const selectResults = state => state.results
export default stopwatchSlice.reducer
