import { AWSRequests } from './http'

const ORDERS_API_FEATURE_KEY = 'ordersadmin'

export const OrdersAPI = {
  async getFullOrders() {
    try {
      const response = await AWSRequests.handleGet({
        apiName: ORDERS_API_FEATURE_KEY,
        path: '/orders'
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
}
