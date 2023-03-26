import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/AuthSlice'
import UserActivlice from '../features/auth/UserActivlice'
import activingSlice from '../features/components'
export const rootStore = configureStore({
  reducer: {
    auth: authReducer,
    userActiv: UserActivlice,
    activ: activingSlice,
  },
})
