import { DataTableProps, DefaultTable } from 'components/Table'
import React from 'react'

export function OrderList<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  return (
    <>
      <DefaultTable data={data} columns={columns} />
    </>
  )
}
