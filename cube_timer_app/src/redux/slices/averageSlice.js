import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mo3: [],
  ao5: [],
  ao12: [],
  ao100: [],
}
const averageSlice = createSlice({
  name: 'averages',
  initialState,
  reducers: {
    setMo3: (state, action) => {
      state.mo3.push(action.payload)
    },
  },
})

export const { setMo3 } = averageSlice.actions
export const selectAverage = state => state.averages
export default averageSlice.reducer
