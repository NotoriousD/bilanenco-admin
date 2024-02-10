import { Amplify } from 'aws-amplify'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { AppRouter } from 'components/router'
import React from 'react'

import { CognitoAuthProvider } from 'services/auth'

import awsExports from '../aws-exports'

import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsExports)
const existingConfig = Amplify.getConfig()

Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      'im-api': {
        endpoint: 'ordersadmin',
        region: 'eu-west-1'
      }
    }
  }
})

function App() {
  return (
    <ErrorBoundary>
      <CognitoAuthProvider>
        <AppRouter />
      </CognitoAuthProvider>
    </ErrorBoundary>
  )
}

export default App
