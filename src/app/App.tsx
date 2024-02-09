import { Amplify } from 'aws-amplify'
import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import ErrorBoundary from 'shared/ui/ErrorBoundary/ErrorBoundary'

import { router } from './router'

import awsExports from "../aws-exports"

Amplify.configure({ ...awsExports })

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
