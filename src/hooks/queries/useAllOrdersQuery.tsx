import React from 'react'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { OrdersAPI } from 'api/orders'

const ORDERS_FEATURE_KEY = 'orders'

export const useAllOrdersQuery = (queryOptions?: UseQueryOptions) => {
  return useQuery({
    queryKey: [ORDERS_FEATURE_KEY],
    queryFn: () => OrdersAPI.getAllOrders(),
    ...queryOptions
  })
}
