import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ufra: {
          green: '#2e7d32',
          gold: '#DAA520',
        },
        status: {
          success: '#2e7d32',
          warning: '#e65100',
          error: '#c62828',
          dark: '#b71c1c',
        },
      },
    },
  },
  plugins: [],
}
export default config
