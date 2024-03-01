import { ListOrdersQuery, Orders } from 'API'
import { generateClient } from 'aws-amplify/api'

import { listOrders } from 'graphql/queries'

const client = generateClient()

const LIMIT = 10

export const OrdersAPI = {
  getOrders: async (limit: number = LIMIT): Promise<Orders[]> => {
    try {
      const response = await client.graphql({
        query: listOrders,
        variables: { limit: limit }
      })
      console.log(response.data)
      return response?.data.listOrders?.items
    } catch (e) {
      throw new Error('Something is Wrong!')
    }
  }
}
