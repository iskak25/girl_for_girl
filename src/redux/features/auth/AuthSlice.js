import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { json, useNavigate } from 'react-router-dom'
import useSteps from '../../../hooks/hooks'
import authService, {
  AuthServiceGet,
} from '../../../Models/Auth/services/AuthServices'
import { increment, steps } from '../components'

// Get user from LocalStorage

const user = JSON.parse(localStorage.getItem('token'))

const initialState = {
  region: '',
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get region
export const getRegion = createAsyncThunk(
  'auth/getRegion',
  async (thunkAPI) => {
    try {
      return await authService.getRegion()
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

// SignUp user
export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    // const dispatch = useDispatch()
    try {
      const res = await authService.signup(user)
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

// SignIn user
export const signin = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    // const navigate = useNavigate()

    try {
      const res = await authService.signin(user)
      if (res) {
        // navigate('/')
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

export const authSlice = createSlice({
  name: 'auth',
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
      .addCase(signup.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(getRegion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRegion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.region = action.payload
      })
      .addCase(getRegion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.region = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
