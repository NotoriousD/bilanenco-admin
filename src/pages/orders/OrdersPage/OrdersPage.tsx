import { createColumnHelper } from '@tanstack/react-table'
import { getOrders } from 'api/ordersApi/ordersApi'
import { Layout } from 'components/Layout'
import React, { useEffect, useState } from 'react'
import { Order, OrderStatuses } from 'types'
import { OrderList } from 'views/OrderList'

const columnHelper = createColumnHelper<Order>()

const initialColumnsData = [
  columnHelper.accessor((_, index) => index + 1, {
    id: '№',
    cell: (info) => info.getValue(),
    header: '№'
  }),
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: () => 'Id'
  }),
  columnHelper.accessor('contact_id', {
    cell: (info) => info.getValue(),
    header: () => 'Contact Id'
  }),
  columnHelper.accessor('created_date', {
    cell: (info) => info.getValue(),
    header: () => 'Created Date'
  }),
  columnHelper.accessor('paied_date', {
    cell: (info) => info.getValue(),
    header: () => 'Paied Date'
  }),
  columnHelper.accessor('currency', {
    cell: (info) => info.getValue(),
    header: () => 'Currency'
  }),
  columnHelper.accessor('total_amount', {
    cell: (info) => info.getValue(),
    header: () => 'Total Amount'
  }),
  columnHelper.accessor('email', {
    cell: (info) => info.getValue(),
    header: () => 'Email'
  }),
  columnHelper.accessor('funnel', {
    cell: (info) => info.getValue(),
    header: () => 'Funnel'
  }),
  columnHelper.accessor('invoice_id', {
    cell: (info) => info.getValue(),
    header: () => 'Invoice Id'
  }),
  columnHelper.accessor('product_id', {
    cell: (info) => info.getValue(),
    header: () => 'Product Id'
  }),
  columnHelper.accessor('product_type', {
    cell: (info) => info.getValue(),
    header: () => 'Product Type'
  }),
  columnHelper.accessor('purchase', {
    cell: (info) => info.getValue(),
    header: () => 'Purchase'
  }),
  columnHelper.accessor('package_id', {
    cell: (info) => info.getValue(),
    header: () => 'Package Id'
  }),
  columnHelper.accessor('subscribe', {
    cell: (info) => info.getValue(),
    header: () => 'Subscribe'
  }),
  columnHelper.accessor('fullName', {
    cell: (info) => info.getValue(),
    header: () => 'Full Name'
  }),
  columnHelper.accessor('phone', {
    cell: (info) => info.getValue(),
    header: () => 'Phone'
  }),
  columnHelper.accessor('order_type', {
    cell: (info) => info.getValue(),
    header: () => 'Order Type'
  }),
  columnHelper.accessor('order_status', {
    cell: (info) => {
      if (OrderStatuses.Success === info.getValue()) {
        return <span className="text-green-500">{info.getValue()}</span>
      } else if (OrderStatuses.Created === info.getValue()) {
        return <span className="text-orange-500">{info.getValue()}</span>
      } else {
        return <span className="text-red-500">{info.getValue()}</span>
      }
    },
    header: () => 'Order Status'
  })
]

export const OrdersPage: React.FC = () => {
  const [orderData, setOrderData] = useState<any>()

  useEffect(() => {
    let call = async () => {
      try {
        let resp: any = await getOrders()
        if (resp) {
          setOrderData(resp?.data)
        }
      } catch (e) {
        console.error(e)
      }
    }
    call()
  }, [])

  return (
    <Layout>
      {orderData && (
        <OrderList columns={initialColumnsData} contentData={orderData} />
      )}
    </Layout>
  )
}
