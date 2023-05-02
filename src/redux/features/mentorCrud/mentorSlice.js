import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MentorsService from '../../../Models/Mentor/MentorService/MentorService'

const initialState = {
  getMentor: null,
  allMentors: null,
  mentors: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoadingId: false,
  message: '',
}

export const addNewMentor = createAsyncThunk('', async (data, thunkAPI) => {
  try {
    console.log('in the func')
    return await MentorsService.addNewMentor(data)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const GetAllMentor = createAsyncThunk(
  'Crud/GetAllMentor',
  async (thunkAPI) => {
    try {
      return await MentorsService.getAllMentor()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)
export const GetIdMentor = createAsyncThunk(
  'Crud/GetIdMentor',
  async (id, thunkAPI) => {
    try {
      return await MentorsService.GetIdMentor(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const deleteMentor = createAsyncThunk(
  'Crud/deleteMentor',
  async (id, thunkAPI) => {
    try {
      return await MentorsService.deleteMentor(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const mentorSlice = createSlice({
  name: 'crudMentor',
  initialState,
  reducers: {
    // addMentors: function (state, action) {
    //   state.mentors.push(action.payload)
    //   console.log(action)
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewMentor.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addNewMentor.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.mentors = action.payload.data
      })
      .addCase(addNewMentor.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.mentors = null
      })
      .addCase(GetAllMentor.pending, (state) => {
        state.isLoading = true
      })
      .addCase(GetAllMentor.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.allMentors = action.payload.data
      })
      .addCase(GetAllMentor.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.allMentors = null
      })

      .addCase(GetIdMentor.pending, (state) => {
        state.isLoading = true
      })
      .addCase(GetIdMentor.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.getMentor = action.payload.data
      })
      .addCase(GetIdMentor.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.getMentor = null
      })
  },
})

export const { addMentors, deletePoMentor } = mentorSlice.actions

export default mentorSlice.reducer
