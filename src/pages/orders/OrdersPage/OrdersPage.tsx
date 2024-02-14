import { get } from 'aws-amplify/api'
import React, { useEffect } from 'react'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'
import { OrderList } from 'features/OrderList'
import { Container } from 'shared/ui/Container'
import { Content } from 'shared/ui/Content'
import { Layout } from 'shared/ui/Layout'

export const OrdersPage: React.FC = () => {
  useEffect(() => {
    const fetchOrders = async () => {
      const restOperation = await get({
        apiName: 'ordersadmin',
        path: '/orders'
      })
      const { body } = await restOperation.response
      const response = await body.json()
      console.log(response)
    }

    fetchOrders()
  }, [])

  return (
    <Layout>
      <Sidebar />
      <Container>
        <Header />
        <Content>
          <OrderList />
        </Content>
      </Container>
    </Layout>
  )
}
