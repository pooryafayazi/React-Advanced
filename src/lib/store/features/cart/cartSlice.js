// src\lib\store\features\cart\cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

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

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        })
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter((item) => item.id !== productId)
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },

    clearCart: (state) => {
      state.items = []
    },

    setDeliveryInfo: (state, action) => {
      state.deliveryInfo = {
        ...state.deliveryInfo,
        ...action.payload,
      }
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  setDeliveryInfo,
} = cartSlice.actions

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)

export const selectItemQuantityById = (id) => (state) =>
  state.cart.items.find((item) => item.id === id)?.quantity || 0

export default cartSlice.reducer
