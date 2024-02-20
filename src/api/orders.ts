import { ListOrdersQuery, Orders } from 'API'
import { generateClient } from 'aws-amplify/api'

import { listOrders } from 'graphql/queries'

const client = generateClient()

export const OrdersAPI = {
  getAllOrders: async (): Promise<Orders[]> => {
    try {
      const response = await client.graphql({
        query: listOrders
      })
      return response?.data.listOrders?.items
    } catch (e) {
      throw new Error('Something is Wrong!')
    }
  }
}
