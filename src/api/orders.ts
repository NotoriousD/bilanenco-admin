import { ListOrdersQuery, Orders } from 'API'
import { generateClient } from 'aws-amplify/api'

import { listOrders } from 'graphql/queries'

const client = generateClient()

export type PaginatedOrdersResponse = ListOrdersQuery['listOrders']

export const OrdersAPI = {
  getAllOrders: async (): Promise<PaginatedOrdersResponse> => {
    try {
      const response = await client.graphql({
        query: listOrders
      })
      return response?.data.listOrders
    } catch (e) {
      throw new Error('Something is Wrong!')
    }
  }
}
