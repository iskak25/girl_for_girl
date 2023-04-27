import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import HomeService from '../../../Models/Home/HomeService/homeService'

const initialState = {
  question: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const addQuestion = createAsyncThunk(
  'question/exra',
  async (QuestionData, thunkAPI) => {
    try {
      return await HomeService.addQuestion(QuestionData)
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

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
    getRegion: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(addQuestion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addQuestion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.question = action.payload
      })
      .addCase(addQuestion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.question = null
      })
  },
})

export const { reset } = questionSlice.actions
export default questionSlice.reducer
