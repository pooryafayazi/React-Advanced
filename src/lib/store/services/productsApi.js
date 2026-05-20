// src\lib\store\services\productsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi', // name of the slice in the store
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PRODUCT_API_ABSOLUTE_URL, // base URL for the API, taken from environment variables
  }),
  endpoints: (builder) => ({
    // define an endpoint query for fetching products
    getProducts: builder.query({
      query: () => 'products',
    }),

    // define an endpoint query for fetching a single product by ID
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
})

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi
