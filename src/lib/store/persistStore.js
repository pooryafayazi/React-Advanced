// src\lib\store\persistStore.js
import { persistStore } from 'redux-persist'

// this file is responsible for creating the persistor instance that will be used to persist the Redux store state across sessions.
// It exports a function that takes the Redux store as an argument and returns the persistor instance created by redux-persist.
// in app router, the store has to be client side,
// so we create the persistor in a separate file and import it where needed,
// ensuring that the persistence logic is properly integrated with the client-side store setup.
export const makePersistor = (store) => {
  return persistStore(store)
}
