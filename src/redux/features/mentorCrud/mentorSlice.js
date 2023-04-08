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
    deleterMentor: function (state, action) {
      state.mentors = state.mentors.filter((item) => item.id != action.payload)
    },
  },
})

export const { addMentors, deleterPoMentor } = mentorSlice.actions

export default mentorSlice.reducer
