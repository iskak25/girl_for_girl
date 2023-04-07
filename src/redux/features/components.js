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
    stepsPlus: (state) => {
      state.step += 1
    },
    stepsMinus: (state) => {
      state.step -= 1
    },
    steps: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { isActiv, stepsPlus, stepsMinus, steps } = activingSlice.actions

export default activingSlice.reducer
