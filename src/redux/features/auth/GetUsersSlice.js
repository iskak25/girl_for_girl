import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import GetUserService from '../../../Models/Admin/AdminServir/GetUsersServicer'

const initialState = {
  allUsers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getAllUserFunction = createAsyncThunk(
  'getUser',
  async (thunkAPI) => {
    try {
      return await GetUserService.getAllUsers()
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

export const GetUserIdSlice = createSlice({
  name: 'getUser',
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
      .addCase(getAllUserFunction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllUserFunction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.allUsers = action.payload.data
      })
      .addCase(getAllUserFunction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.allUsers = null
      })
  },
})

export const { getAllUsers, getUserId } = GetUserIdSlice.actions
export default GetUserIdSlice.reducer
