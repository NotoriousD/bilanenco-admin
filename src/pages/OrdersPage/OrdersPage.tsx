import { get } from 'aws-amplify/api'

import React, { useEffect } from 'react'

export const OrdersPage: React.FC = () => {
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await get({
        apiName: 'ordersadmin',
        path: 'orders'
      })
      console.log(response)
    }

    fetchOrders()
  }, [])

  return <div>OrdersPage</div>
}
