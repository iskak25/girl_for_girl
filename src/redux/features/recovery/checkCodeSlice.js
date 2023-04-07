import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recoveryService from '../../../Models/Auth/services/RecoveryServices'

const initialState = {
  value: '1234',
}

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

export const NewCodeCheck = createSlice({
  name: 'userActiv',
  initialState,
  reducers: {
    checkCodeAction: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { checkCodeAction } = NewCodeCheck.actions
export default NewCodeCheck.reducer
