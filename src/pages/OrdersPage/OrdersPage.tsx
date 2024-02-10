import React from 'react'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'
import { OrderList } from 'features/OrderList'
import { Container } from 'shared/ui/Container'
import { Layout } from 'shared/ui/Layout'

export const OrdersPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <Container>
        <OrderList />
      </Container>
    </Layout>
  )
}
