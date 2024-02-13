import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const OrdersPage = lazy(() =>
  import('pages/orders/OrdersPage').then((module) => ({
    default: module.OrdersPage
  }))
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <OrdersPage />
  },
  {
    path: '/events',
    element: <>events</>,
    children: [
      {
        path: ':id',
        element: <></>
      },
      {
        path: 'create',
        element: <></>
      }
    ]
  },
  {
    path: '/courses',
    element: <>courses</>,
    children: [
      {
        path: ':id',
        element: <></>
      },
      {
        path: 'create',
        element: <></>
      }
    ]
  },
  {
    path: '/presales',
    element: <>presales</>,
    children: [
      {
        path: ':id',
        element: <></>
      },
      {
        path: 'create',
        element: <></>
      }
    ]
  }
])

export const AppRouter = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}
