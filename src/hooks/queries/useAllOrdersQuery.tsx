import React from 'react'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { Orders } from '../../API'
import { OrdersAPI, PaginatedOrdersResponse } from 'api/orders'

const ORDERS_FEATURE_KEY = 'orders'

export const useAllOrdersQuery = (
  queryOptions?: UseQueryOptions<PaginatedOrdersResponse>
) => {
  return useQuery<PaginatedOrdersResponse>({
    queryKey: [ORDERS_FEATURE_KEY],
    queryFn: () => OrdersAPI.getAllOrders(),
    ...queryOptions
  })
}
