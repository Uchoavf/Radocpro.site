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
        radoc: {
          green: '#1c5640',
          'green-deep': '#143c2d',
          gold: '#bd9748',
          'gold-soft': '#d8bd86',
          red: '#a8392e',
          cream: '#f7f3ea',
          'cream-2': '#efe8d8',
          ink: '#22312a',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
