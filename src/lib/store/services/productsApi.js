// src\lib\store\services\productsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PRODUCT_API_ABSOLUTE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),

    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi
