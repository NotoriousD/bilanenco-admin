import { apiCall } from 'api/api'

export const getOrders = async () => {
  return await apiCall('ordersadmin', '/orders')
}
