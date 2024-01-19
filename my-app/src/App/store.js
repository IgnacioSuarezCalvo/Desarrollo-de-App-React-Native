import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../Features/Shop/shopSlice'
import { shopApi } from './services/shopServices'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from "../Features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    shop:shopReducer,
    cart:cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)