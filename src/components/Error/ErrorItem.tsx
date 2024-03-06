import React from 'react'
import { OrderStatuses } from 'types'
import { ErrorColors } from './ErrorTypes'

interface ErrorStatus {
  status: OrderStatuses
}

export const ErrorItem: React.FC<ErrorStatus> = ({ status }: ErrorStatus) => {
  return (
    <span
      className={`${ErrorColors[status]} p-1 rounded-full justify-center inline-flex w-[100px]`}
    >
      {status}
    </span>
  )
}
