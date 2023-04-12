import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stateActiv: false,
  step: 0,
}

export const activingSlice = createSlice({
  name: 'activ',
  initialState,
  reducers: {
    isActiv: (state) => {
      state.stateActiv = true
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    steps: (state, action) => {
      state.step = action.payload
    },
  },
})

export const {
  isActiv,

  steps,
  increment,
} = activingSlice.actions

export default activingSlice.reducer
