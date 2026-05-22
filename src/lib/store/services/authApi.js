// src\lib\store\services\authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser, logout } from '../features/auth/authSlice'

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
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data.user))
        } catch (err) {
          dispatch(logout())
        }
      },
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
      query: () => '/me',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data.user))
        } catch (err) {
          dispatch(logout())
        }
      },
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: '/change-password',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(logout())
        } catch (err) {
          console.error('Change password failed:', err)
        }
      },
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: '/forgot-password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: '/reset-password',
        method: 'POST',
        body: credentials,
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
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi
