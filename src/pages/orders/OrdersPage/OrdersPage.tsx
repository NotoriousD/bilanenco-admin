import { Layout } from 'components/Layout'
import { useAllOrdersQuery } from 'hooks/queries/useAllOrdersQuery'
import { OrderList } from 'views/OrderList'
import { columns } from './columns'
import { Orders } from 'API'

export const OrdersPage = () => {
  const { data, isLoading, isPending, isError } = useAllOrdersQuery()

  return (
    <Layout>
      <>
        {isLoading && <p>Loading</p>}
        {data?.items.length && <OrderList columns={columns} data={data.items as Orders[]} />}
      </>
    </Layout>
  )
}
