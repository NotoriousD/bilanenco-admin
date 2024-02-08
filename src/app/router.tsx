import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const OrdersPage = lazy(() =>
  import('pages/OrdersPage').then((module) => ({ default: module.OrdersPage }))
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <OrdersPage />
  }
])
