import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/AuthSlice'
import UserActivlice from '../features/auth/UserActivlice'
import activingSlice from '../features/components'
import { counterSlice } from '../features/couter/couter'
import mentorSlice from '../features/mentorCrud/mentorSlice'
import productCrudSlice from '../features/product/productCrudSlice'
import RecoveryUser from '../features/recovery/recoverySlice'
// import { mentorSlice } from '../features/mentorCrud/mentorSlice'
// import mentorSlice from './mentorCrud/mentorSlice'
// import mentorSlice from '../features/auth/mentorSlice'
export const rootStore = configureStore({
  reducer: {
    auth: authReducer,
    userActiv: UserActivlice,
    activ: activingSlice,
    mentor: mentorSlice,
    product: productCrudSlice,
    recovery: RecoveryUser,
    couter: counterSlice,
  },
})

// UserActivlice
