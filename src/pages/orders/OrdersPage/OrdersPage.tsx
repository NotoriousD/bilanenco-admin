import { OrdersAPI } from 'api/orders'
import { get } from 'aws-amplify/api'

import React, { useEffect } from 'react'

enum Currency {
  USD = 'usd',
  UAH = 'uah'
}

enum OrderStatuses {
  Success = 'success',
  Created = 'created',
  Processing = 'processing'
}

enum OrderTypes {
  FULL = 'FULL',
  PRESALE = 'PRESALE'
}

interface Order {
  contact_id: string | null
  created_date: string
  currency: Currency
  email: string
  fullName: string
  funnel: string | null
  id: string
  invoice_id: string
  order_status: OrderStatuses
  order_type: OrderTypes
  package_id: string
  paied_date: string | null
  phone: string
  product_id: string
  product_type: string
  purchase: string
  subscribe: boolean
  total_amount: number
}

export const OrdersPage: React.FC = () => {
  useEffect(() => {
    const fetchOrders = async () => {
      await OrdersAPI.getFullOrders()
    }

    fetchOrders()
  }, [])

  return <div>OrdersPage</div>
}
