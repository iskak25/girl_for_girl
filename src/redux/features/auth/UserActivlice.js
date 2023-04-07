import authService from '../../../Models/Auth/services/AuthServices'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: '1234',
}

export const activFunction = createAsyncThunk(
  'auth/activ',
  async (code, thunkAPI) => {
    try {
      return await authService.activUser(code)
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

export const UserActivlice = createSlice({
  name: 'userActiv',
  initialState,
  reducers: {
    activUser: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { activUser } = UserActivlice.actions
export default UserActivlice.reducer
