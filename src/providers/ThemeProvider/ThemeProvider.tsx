import { FC, useMemo } from 'react'
import { DefaultTheme, ThemeProvider as STThemeProvider } from 'styled-components'
import type { ThemeProviderProps } from './index.d'
import { GlobalStyle } from './GlobalStyle'
import { pallete } from './palletes/pallete'

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // other theme config added here
  const theme = useMemo<DefaultTheme>(() => ({
    pallete,
  }), [])

  return (
    <STThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </STThemeProvider>
  )
}

export default ThemeProvider
