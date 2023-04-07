import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recoveryService from '../../../Models/Auth/services/RecoveryServices'

// Get user from LocalStorage

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// check user
export const checkUser = createAsyncThunk(
  'recovery/checkUser',
  async (user, thunkAPI) => {
    try {
      return await recoveryService.checkemail(user)
      // props.onNext()
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

// newPassword
export const newPassword = createAsyncThunk(
  'recovery/newPassword',
  async (user, thunkAPI) => {
    try {
      const res = await recoveryService.newPassword(user)
      if (res) {
      }
      return res
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

export const recoverySlice = createSlice({
  name: 'recovery',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(newPassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newPassword.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(newPassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})

export const { reset } = recoverySlice.actions
export default recoverySlice.reducer
