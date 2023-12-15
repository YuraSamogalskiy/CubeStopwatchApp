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
        if (time.id === action.payload) {
          time.isDNF = !time.isDNF
        }
      })
    },
    plusTwoResult: (state, action) => {
      return state.forEach(time => {
        if (time.id === action.payload) {
          time.isPlusTwo = !time.isPlusTwo
          if (time.isPlusTwo) {
            time.seconds += 2
          } else {
            time.seconds -= 2
          }
        }
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
export const selectMinResult = state => {
  const results = state.results
  if (results.length === 0) {
    return '-'
  }
  const minTime = results.reduce((min, time) => {
    const currentTime =
      time.minutes * 60 + time.seconds + time.milliseconds / 1000
    return currentTime < min ? currentTime : min
  }, Infinity) // Infinity для початкового значення
  return minTime
}

// Додайте новий селектор для отримання максимального значення
export const selectMaxResult = state => {
  const results = state.results
  if (results.length === 0) {
    return '-'
  }
  const maxTime = results.reduce((max, time) => {
    const currentTime =
      time.minutes * 60 + time.seconds + time.milliseconds / 1000
    return currentTime > max ? currentTime : max
  }, -Infinity) // -Infinity для початкового значення
  return maxTime
}
export default stopwatchSlice.reducer
