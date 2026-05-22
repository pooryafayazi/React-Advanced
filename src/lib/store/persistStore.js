// src\lib\store\persistStore.js
import { persistStore } from 'redux-persist'

export const makePersistor = (store) => {
  return persistStore(store)
}
