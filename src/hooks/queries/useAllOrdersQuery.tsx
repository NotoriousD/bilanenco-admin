import React from 'react'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { Orders } from '../../API'
import { OrdersAPI } from 'api/orders'

const ORDERS_FEATURE_KEY = 'orders'

export const useAllOrdersQuery = (queryOptions?: UseQueryOptions<Orders[]>) => {
  return useQuery<Orders[]>({
    queryKey: [ORDERS_FEATURE_KEY],
    queryFn: () => OrdersAPI.getOrders(),
    ...queryOptions
  })
}
