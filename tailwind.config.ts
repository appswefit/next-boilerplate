import type { Config } from 'tailwindcss'

import theme from '@/presentation/styles/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      extend: {
        borderRadius: {
          DEFAULT: theme.border.radius,
        },
        fontFamily: {
          sans: [theme.font.family, 'sans-serif'],
        },
        fontWeight: {
          light: theme.font.light,
          normal: theme.font.normal,
          bold: theme.font.bold,
          extrabold: theme.font.xbold,
        },
        fontSize: {
          'x-small': theme.font.sizes.xsmall,
          small: theme.font.sizes.small,
          base: theme.font.sizes.medium,
          large: theme.font.sizes.large,
          'x-large': theme.font.sizes.xlarge,
          '2x-large': theme.font.sizes.xxlarge,
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
        spacing: {
          'xx-small': theme.spacings.xxsmall,
          'x-small': theme.spacings.xsmall,
          small: theme.spacings.small,
          medium: theme.spacings.medium,
          large: theme.spacings.large,
          'x-large': theme.spacings.xlarge,
          'xx-large': theme.spacings.xxlarge,
        },
      },
    },
    extend: {
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
