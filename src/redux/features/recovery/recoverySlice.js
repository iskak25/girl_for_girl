import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recoveryService from '../../../Models/Auth/services/RecoveryServices'

// Get user from LocalStorage

const initialState = {
  value: '1234',
}

// check user
// export const checkUser = createAsyncThunk(
//   'recovery/checkUser',
//   async (user, thunkAPI) => {
//     try {
//       return await recoveryService.checkemail(user)
//       // props.onNext()
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   },
// )

// newPassword
export const newPassword = createAsyncThunk(
  'recovery/newPassword',
  async (data, thunkAPI) => {
    try {
      const res = await recoveryService.newPassword(data)
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

export const checkUser = createAsyncThunk(
  'recovery/checkUser',
  async (user, thunkAPI) => {
    try {
      return await recoveryService.checkemail(user)
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

export const newCode = createAsyncThunk(
  'auth/activ',
  async (code, thunkAPI) => {
    try {
      return await recoveryService.newCode(code)
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

export const RecoveryUser = createSlice({
  name: 'userActiv',
  initialState,
  reducers: {
    activUser: (state, action) => {
      state.value = action.payload
    },
    checkCodeAction: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { activUser, checkCodeAction } = RecoveryUser.actions
export default RecoveryUser.reducer
