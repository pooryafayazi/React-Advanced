// src\lib\store\services\productsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi', // name of the slice in the store
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6a0d7b4c769682b8ee764a71.mockapi.io/api/v1/',
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
