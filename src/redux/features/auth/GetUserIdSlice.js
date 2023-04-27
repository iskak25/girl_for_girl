import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import GetUserService from '../../../Models/Admin/AdminServir/GetUsersServicer'

const initialState = {
  userId: [],
  role: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getAUserIdFunction = createAsyncThunk(
  'getUserID/',
  async (idUser, thunkAPI) => {
    try {
      return await GetUserService.getUserId(idUser)
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
export const getRoleUser = createAsyncThunk(
  'getRoleUser/',
  async (idUser, thunkAPI) => {
    try {
      return await GetUserService.getRoleUser(idUser)
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

export const GetUserSlice = createSlice({
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
      .addCase(getAUserIdFunction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAUserIdFunction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userId = action.payload.data
      })
      .addCase(getAUserIdFunction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.userId = null
      })
      .addCase(getRoleUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRoleUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.role = action.payload.data
      })
      .addCase(getRoleUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.role = null
      })
  },
})

export const { reset } = GetUserSlice.actions
export default GetUserSlice.reducer
