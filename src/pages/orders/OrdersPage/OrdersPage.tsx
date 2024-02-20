import React from 'react'

import { useAllOrdersQuery } from 'hooks/queries/useAllOrdersQuery'

import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'
import { OrderList } from 'features/OrderList'
import { Container } from 'shared/ui/Container'
import { Content } from 'shared/ui/Content'
import { Layout } from 'shared/ui/Layout'

export const OrdersPage: React.FC = () => {
  const { data, isLoading, isPending, isError } = useAllOrdersQuery()

  console.log(data)
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
