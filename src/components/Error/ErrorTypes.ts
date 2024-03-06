import { OrderStatuses } from 'types'

export const ErrorColors = {
  [OrderStatuses.Success]: 'text-green-500 bg-green-500/20',
  [OrderStatuses.Created]: 'text-orange-500 bg-orange-500/20',
  [OrderStatuses.Processing]: 'text-red-500 bg-red-500/20',
  [OrderStatuses.Failure]: 'text-red-500 bg-red-500/20',
  [OrderStatuses.Pending]: 'text-red-500 bg-red-500/20'
}
