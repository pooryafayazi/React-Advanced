// src\lib\store\features\cart\cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

// initial state of the cart slice
const initialState = {
  items: [],
  deliveryInfo: {
    fullName: '',
    phone: '',
    city: '',
    address: '',
    postalCode: '',
  },
}

// create a slice for cart management
const cartSlice = createSlice({
  name: 'cart',

  initialState,

  // reducers to handle cart actions
  reducers: {
    // add a product to the cart, or increase quantity if it already exists
    addToCart: (state, action) => {
      // the product to be added is passed in the action payload
      const product = action.payload
      // check if the product already exists in the cart
      const existingItem = state.items.find((item) => item.id === product.id)
      // if it exists, increase the quantity, otherwise add it to the cart with quantity 1
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        })
      }
    },

    // remove a product from the cart by filtering it out
    removeFromCart: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter((item) => item.id !== productId)
    },

    // increment the quantity of a product in the cart
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },

    // decrement the quantity of a product in the cart, but not below 1
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },

    // clear the entire cart
    // this reducer simply resets the items array to an empty array when the clearCart action is dispatched
    clearCart: (state) => {
      state.items = []
    },

    // set delivery information for the order
    // with the provided details in the action payload and merge it with the existing deliveryInfo state
    setDeliveryInfo: (state, action) => {
      state.deliveryInfo = {
        ...state.deliveryInfo,
        ...action.payload,
      }
    },
  },
})

// export actions and reducer for use in the store
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  setDeliveryInfo,
} = cartSlice.actions

// selectors to get cart data from the state
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)

// this selector takes a product ID and returns the quantity of that product in the cart, or 0 if it is not in the cart
export const selectItemQuantityById = (id) => (state) =>
  state.cart.items.find((item) => item.id === id)?.quantity || 0

// export the reducer to be included in the store configuration
export default cartSlice.reducer

// The cart slice manages the state of the shopping cart, which includes an array of items.
// Each item represents a product added to the cart, along with its quantity.
// The reducers handle adding products to the cart, removing products from the cart, and clearing the entire cart.
// cart
//  └ items
//      ├ product
//      ├ product
//      └ product
