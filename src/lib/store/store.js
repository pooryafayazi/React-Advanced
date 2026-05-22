// src\lib\store\store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productsApi } from './services/productsApi'
import { authApi } from './services/authApi'
import cartReducer from './features/cart/cartSlice'
import authReducer from './features/auth/authSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items', 'deliveryInfo'],
}

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  auth: authReducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(productsApi.middleware)
        .concat(authApi.middleware),
  })
}
