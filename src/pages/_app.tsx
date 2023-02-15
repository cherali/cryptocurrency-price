import type { AppProps } from 'next/app'
import ErrorBoundaryProvider from 'providers/ErrorBoundaryProvider/ErrorBoundaryProvider'
import ThemeProvider from 'providers/ThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ErrorBoundaryProvider>
        <Component {...pageProps} />
      </ErrorBoundaryProvider>
    </ThemeProvider>
  )
}
