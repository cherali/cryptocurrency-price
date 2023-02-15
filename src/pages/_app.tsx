import type { AppProps } from 'next/app'
import ErrorBoundaryProvider from 'providers/ErrorBoundaryProvider/ErrorBoundaryProvider'
import ThemeProvider from 'providers/ThemeProvider'
import MessageProvider from 'providers/MessageProvider/MessageProvider'
import StateManagerProvider from 'providers/StateManagerProvider/StateManagerProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateManagerProvider>
      <ThemeProvider>
        <MessageProvider />
        <ErrorBoundaryProvider>
          <Component {...pageProps} />
        </ErrorBoundaryProvider>
      </ThemeProvider>
    </StateManagerProvider>
  )
}
