import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    border: {
      radius: string,
    },
    font: {
      family: string,
      light: number,
      normal: number,
      bold: number,
      xbold: number,
      sizes: {
        xsmall: string,
        small: string,
        medium: string,
        large: string,
        xlarge: string,
        xxlarge: string,
      },
    },
    colors: {
      primary: string,
      secondary: string,
      gray: string,
      darkGray: string,
      white: string,
      green: string,
      lightGray: string,
    },
    spacings: {
      xxsmall: string,
      xsmall: string,
      small: string,
      medium: string,
      large: string,
      xlarge: string,
      xxlarge: string,
    },
  }
}