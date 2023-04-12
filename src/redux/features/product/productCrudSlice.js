import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AddProductServer from '../../../Models/Shop/AddProduct/AddProductServer'

const initialState = {
  products: null,
  file: null,
}
console.log(initialState)

export const addNewPost = createAsyncThunk('', async (data, thunkAPI) => {
  try {
    return await AddProductServer.addproduct(data)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const productSlice = createSlice({
  name: 'crudMentor',
  initialState,
  reducers: {
    addFile: (state, action) => {
      state.file = action.payload
    },

    addProduct: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { addproduct, deletePoMentor, editProduct } = productSlice.actions

export default productSlice.reducer
