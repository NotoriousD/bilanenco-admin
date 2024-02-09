import { Amplify } from 'aws-amplify'
import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import ErrorBoundary from 'shared/ui/ErrorBoundary/ErrorBoundary'

import awsExports from '../aws-exports'

import { router } from './router'

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
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
