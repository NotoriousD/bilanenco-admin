import { ListOrdersQuery } from 'API'
import { generateClient } from 'aws-amplify/api'

import { listOrders } from 'graphql/queries'

const client = generateClient()

export type PaginatedOrdersResponse = ListOrdersQuery['listOrders']

const LIMIT = 10

export const OrdersAPI = {
  getOrders: async (
    limit: number = LIMIT
  ): Promise<PaginatedOrdersResponse> => {
    try {
      const response = await client.graphql({
        query: listOrders,
        variables: { limit: limit }
      })
      return response?.data.listOrders
    } catch (e) {
      throw new Error('Something is Wrong!')
    }
  }
}
