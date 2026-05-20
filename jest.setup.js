// jest.setup.js
import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
Object.assign(global, { TextDecoder, TextEncoder })

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    ok: true,
  })
)
afterEach(() => {
  jest.clearAllMocks()
})
