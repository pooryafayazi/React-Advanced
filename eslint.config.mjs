// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

const eslintConfig = defineConfig([
  ...nextVitals, // --- ADD THIS BLOCK ---
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Prettier runs as an ESLint rule
    },
  },
  prettierConfig, // --- END OF NEW BLOCK ---

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '**/*.desc.{js,jsx}',
  ]),
  ...storybook.configs['flat/recommended'],
])

export default eslintConfig
