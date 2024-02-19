import type { Config } from 'tailwindcss'

import theme from './src/presentation/styles/theme'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [theme.font.family, 'sans-serif'],
      },
      minHeight: {
        allWithoutHeader: 'calc(100% - var(--header-height))',
      },
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        gray: theme.colors.gray,
        darkGray: theme.colors.darkGray,
        white: theme.colors.white,
        green: theme.colors.green,
        lightGray: theme.colors.lightGray,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
