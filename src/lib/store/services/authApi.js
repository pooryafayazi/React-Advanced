// src\lib\store\services\authApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth',

    credentials: 'include',
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',

        method: 'POST',

        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (userData) => ({
        url: '/register',

        method: 'POST',

        body: userData,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/logout',

        method: 'POST',
      }),
    }),

    refresh: builder.mutation({
      query: () => ({
        url: '/refresh',

        method: 'POST',
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshMutation,
  useGetMeQuery,
} = authApi
