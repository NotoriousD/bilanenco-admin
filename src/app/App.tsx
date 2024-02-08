import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import ErrorBoundary from 'shared/ui/ErrorBoundary/ErrorBoundary'

import { router } from './router'

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
