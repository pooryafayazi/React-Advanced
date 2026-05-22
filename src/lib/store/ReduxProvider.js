// src\lib\store\ReduxProvider.js
'use client'

import { Provider } from 'react-redux'
import { makeStore } from './store'
import { makePersistor } from './persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #555;
  font-size: 1.1rem;
  font-family: sans-serif;
`
const store = makeStore()
const persistor = makePersistor(store)

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingWrapper>در حال بازیابی داده‌ها...</LoadingWrapper>}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  )
}
