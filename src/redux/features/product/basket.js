import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ProductsService from '../../../Models/Shop/ProductServer'

const initialState = {
  getOrder: null,
  addOrder: null,
  amountProduct: null,
  allProduct: null,
  productData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const addBasket = createAsyncThunk(
  'getbasket/exra',
  async (productData, thunkAPI) => {
    try {
      return await ProductsService.addBasket(productData)
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

export const amountProduct = createAsyncThunk(
  'plusCount/exra',
  async (userData, thunkAPI) => {
    try {
      return await ProductsService.amountProduct(userData)
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

export const getBasket = createAsyncThunk('basket/exra', async (thunkAPI) => {
  try {
    return await ProductsService.getBasket()
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteBasket = createAsyncThunk(
  'basketdelete/exra',
  async (id, thunkAPI) => {
    try {
      return await ProductsService.deleteBasket(id)
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

export const addOrder = createAsyncThunk('addorder/exra', async (thunkAPI) => {
  try {
    return await ProductsService.addOrder()
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getOrder = createAsyncThunk('getOrder/exra', async (thunkAPI) => {
  try {
    return await ProductsService.getOrder()
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const basketSlice = createSlice({
  name: 'basket',
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
      .addCase(addBasket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addBasket.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.productData = action.payload
      })
      .addCase(addBasket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.productData = null
      })
      .addCase(getBasket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBasket.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.allProduct = action.payload.data
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.allProduct = null
      })
      .addCase(amountProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(amountProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.amountProduct = action.payload.data
      })
      .addCase(amountProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.amountProduct = null
      })

      .addCase(addOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.addOrder = action.payload
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.addOrder = null
      })
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.getOrder = action.payload.data
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.getOrder = null
      })
  },
})

export const { reset } = basketSlice.actions
export default basketSlice.reducer
