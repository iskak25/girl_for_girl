import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/AuthSlice'
import GetUserIdSlice from '../features/auth/GetUserIdSlice'
import GetUsersSlice from '../features/auth/GetUsersSlice'
import UserActivlice from '../features/auth/UserActivlice'
import activingSlice from '../features/components'
import mentorSlice from '../features/mentorCrud/mentorSlice'
import basketSlice from '../features/product/basket'
// import { basketSlice } from '../features/product/basket'
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
    getUsers: GetUsersSlice,
    getIdUser: GetUserIdSlice,
    basket: basketSlice,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  },
})

// UserActivlice
