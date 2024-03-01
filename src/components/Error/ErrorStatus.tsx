import React from 'react'
import { OrderStatuses } from 'types'

const ErrorColors = {
  [OrderStatuses.Success]: 'text-green-500 bg-green-500/20',
  [OrderStatuses.Created]: 'text-orange-500 bg-orange-500/20',
  [OrderStatuses.Processing]: 'text-red-500 bg-red-500/20',
  [OrderStatuses.Failure]: 'text-red-500 bg-red-500/20',
  [OrderStatuses.Pending]: 'text-red-500 bg-red-500/20'
}

interface ErrorStatus {
  status: OrderStatuses
}

export const ErrorStatus: React.FC<ErrorStatus> = ({ status }: ErrorStatus) => {
  return (
    <span
      className={`${ErrorColors[status]} p-1 rounded-full justify-center inline-flex w-[100px]`}
    >
      {status}
    </span>
  )
}
