import { Component, ErrorInf } from 'react'

export interface ErrorBoundaryProviderState {
  hasError?: boolean;
  // error?: Error | null;
  //  errorInfo?: ErrorInfo | null;
}

export interface ErrorBoundaryProviderProps {
  children: ReactNode;
}
export interface ErrorPageProps {
  handle?: () => void;
}