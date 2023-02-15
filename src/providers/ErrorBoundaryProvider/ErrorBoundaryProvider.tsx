import { Component, ErrorInfo, FC } from 'react'
import type { ErrorBoundaryProviderProps, ErrorBoundaryProviderState, ErrorPageProps } from './index.d'


const ErrorPage: FC<ErrorPageProps> = () => {
  return (
    <div>
      <p>Something went wrong!</p>
    </div>
  )
}



class ErrorBoundaryProvider extends Component<ErrorBoundaryProviderProps, ErrorBoundaryProviderState> {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryProviderState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // log error
  }



  render() {
    return this.state.hasError ? (
      <ErrorPage />
    )
      :
      this.props.children
  }
}

export default ErrorBoundaryProvider