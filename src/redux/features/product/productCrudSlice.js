import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductsService from '../../../Models/Shop/ProductServer'

const initialState = {
  products: { title: '', description: '', price: 0, size: '' },
  file: null,
  allProducts: null,
  idProduct: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoadingId: false,
  message: '',
}

export const addNewPost = createAsyncThunk('', async (data, thunkAPI) => {
  try {
    return await ProductsService.addproduct(data)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const GetAllProducts = createAsyncThunk(
  'Crud/GetAllUsers',
  async (thunkAPI) => {
    try {
      return await ProductsService.getAllProduct()
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

export const GetIdProduct = createAsyncThunk(
  'Crud/GetIdUser',
  async (id, thunkAPI) => {
    try {
      return await ProductsService.getIdProduct(id)
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
export const DeleteProduct = createAsyncThunk(
  'Crud/Delete',
  async (id, thunkAPI) => {
    try {
      return await ProductsService.deleteProduct(id)
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

export const productSlice = createSlice({
  name: 'productMentor',
  initialState,
  reducers: {
    addFile: (state, action) => {
      state.file = action.payload
    },

    addProduct: (state, action) => {
      state.products = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(GetAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.allProducts = action.payload.data
      })
      .addCase(GetAllProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.allProducts = null
      })
      .addCase(GetIdProduct.pending, (state) => {
        state.isLoadingId = true
      })
      .addCase(GetIdProduct.fulfilled, (state, action) => {
        state.isLoadingId = false
        state.isSuccess = true
        state.idProduct = action.payload.data
      })
      .addCase(GetIdProduct.rejected, (state, action) => {
        state.isLoadingId = false
        state.isError = true
        state.message = action.payload
        state.idProduct = null
      })
  },
})

export const { addproduct, addFile } = productSlice.actions

export default productSlice.reducer
