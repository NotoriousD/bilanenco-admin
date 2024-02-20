import { Orders } from 'API'
import { generateClient } from 'aws-amplify/api'

import { listOrders } from 'graphql/queries'

const client = generateClient()

export const OrdersAPI = {
  getAllOrders: async () => {
    try {
      const response = await client.graphql({
        query: listOrders
      })
      return response.data?.listOrders
    } catch (e) {
      console.log(e)
    }
  }
}
