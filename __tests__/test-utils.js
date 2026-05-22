// __tests__\test-utils.jsx
import { render } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../src/lib/store/features/cart/cartSlice'
import { productsApi } from '../src/lib/store/services/productsApi'
import { GlobalStyle, theme } from '../src/styles/theme'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}))

// createTestStore is a utility function that sets up a Redux store for testing, combining the cart reducer and products API reducer,
// and applying the necessary middleware.
function createTestStore(preloadedState = {}) {
  // Combine reducers for the store, including the cart reducer and the products API reducer.
  const rootReducer = combineReducers({
    cart: cartReducer, // without persist
    [productsApi.reducerPath]: productsApi.reducer,
  })

  // Configure the store with the combined reducers, preloaded state, and middleware for handling async actions from the products API.
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  })
}

// renderWithProviders is a custom render function that wraps the UI component with both the Redux Provider (using the test store) and
// the ThemeProvider (using the defined theme and global styles) to ensure that components have access to the necessary context during testing.
function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = createTestStore(preloadedState),
    ...renderOptions
  } = {}
) {
  // Wrapper component that provides both the Redux store and the theme context to the UI component being tested.
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    )
  }

  // Render the UI component with the Wrapper and return the store along with the render result for use in tests.
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}

// Export all testing library utilities and the custom render function for use in test files.
export * from '@testing-library/react'
export { renderWithProviders as render }
