import { ColumnDef } from '@tanstack/react-table'
import { Orders } from 'API'
import { ErrorStatus } from 'components/Error/ErrorStatus'
import { Check } from 'lucide-react'
import moment from 'moment'
import { OrderStatuses } from 'types'

const dateFormat = `DD/MM/YYYY HH:mm`

const dateFormate = (date: string, format: string) => {
  return moment(date).format(format)
}

export const columns: ColumnDef<Orders>[] = [
  { accessorKey: 'fullName', header: 'Full Name' },
  { accessorKey: 'phone', header: 'Phone' },
  { accessorKey: 'email', header: 'Email' },
  {
    accessorKey: 'order_status',
    header: 'Order Status',
    cell: (info) => {
      const status = info.getValue() as OrderStatuses
      return <ErrorStatus status={status} />
    }
  },
  {
    accessorKey: 'currency',
    header: 'Currency',
    cell: (info) => {
      const currency = info.getValue() as string
      return <div className="uppercase">{currency}</div>
    }
  },
  { accessorKey: 'total_amount', header: 'Total Amount' },
  { accessorKey: 'order_type', header: 'Order Type' },
  {
    accessorKey: 'subscribe',
    header: 'Subscribe',
    cell: (info) => {
      const subscribe = info.getValue()
      if (subscribe) return <Check width={20} height={20} />
    }
  },
  {
    accessorKey: 'created_date',
    header: 'Created Date',
    cell: (info) => {
      const date = info.getValue() as string
      if (date) return dateFormate(date, dateFormat)
    }
  },
  {
    accessorKey: 'paied_date',
    header: 'Created Date',
    cell: (info) => {
      const date = info.getValue() as string
      if (date) return dateFormate(date, dateFormat)
    }
  }
]
