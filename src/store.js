import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/Cart/cartSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
})
