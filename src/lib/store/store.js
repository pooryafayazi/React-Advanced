// src\lib\store\store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productsApi } from './services/productsApi'
import cartReducer from './features/cart/cartSlice'

// --- redux‑persist imports ---
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import { persistReducer } from 'redux-persist'

// --- persist config ---
const cartPersistConfig = {
  key: 'cart', // key for localStorage
  storage, // use localStorage
  whitelist: ['items', 'deliveryInfo'], // only persist these parts of the cart state
}

// Combine reducers (if you have more than one slice, you can add them here)
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
})

// Create the store and add the API slice as a reducer
export const makeStore = () => {
  // configure the store with the root reducer and middleware
  return configureStore({
    // The rootReducer combines the productsApi reducer and the cart reducer (with persistence).
    reducer: rootReducer,
    // The middleware from the productsApi is included to enable features like caching and invalidation for API calls.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // disable serializable check for redux-persist actions
      }).concat(productsApi.middleware),
  })
}

// The store is configured with two main reducers: the productsApi reducer for handling API calls related to products,
// and the cart reducer for managing the state of the shopping cart.
// The productsApi reducer is added using the reducerPath provided by the API slice,
// which ensures that the state for API calls is properly namespaced.
// The cart reducer is added under the 'cart' key, which means that the state for the cart will be accessible under state.cart in the application.
// The middleware from the productsApi is also included to enable features like caching and invalidation for API calls.

// The overall structure of the store's state will look like this:
// {
//   productsApi: { ... }, // state related to API calls for products
//   cart: {              // state related to the shopping cart
//     items: [           // array of items in the cart
//       {
//         id: 1,          // product ID
//         name: 'Product Name', // product name
//         price: 9.99,    // product price
//         quantity: 2,    // quantity of this product in the cart
//       },
//       // ... other items
//     ],
//   },
// }
