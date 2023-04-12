import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mentors: [],
}

export const mentorSlice = createSlice({
  name: 'crudMentor',
  initialState,
  reducers: {
    addMentors: function (state, action) {
      state.mentors.push(action.payload)
      console.log(action)
    },
  },
})

export const { addMentors, deletePoMentor } = mentorSlice.actions

export default mentorSlice.reducer
