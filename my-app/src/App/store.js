import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../Features/Shop/shopSlice'
import { shopApi } from './services/shopServices'
import { authApi } from './services/auth'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from "../Features/cart/cartSlice"
import authReducer from "../Features/auth/authSlice"

export const store = configureStore({
  reducer: {
    shop:shopReducer,
    cart:cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),
})

setupListeners(store.dispatch)