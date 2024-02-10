import React from 'react'
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from 'shared/ui/Table'

export const OrderList = () => {
  return (
    <Table className="text-base">
      <TableCaption>Order List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  )
}
