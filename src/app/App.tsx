import React from 'react'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { store } from 'stores'
import { CognitoAuthProvider } from 'services/auth'

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { AppRouter } from 'components/router'

import config from '../amplifyconfiguration.json'

import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <CognitoAuthProvider>
            <AppRouter />
          </CognitoAuthProvider>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
