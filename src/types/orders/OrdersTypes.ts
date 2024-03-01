export enum Currency {
  USD = 'usd',
  UAH = 'uah'
}

export enum OrderStatuses {
  Success = 'success',
  Created = 'created',
  Processing = 'processing',
  Pending = 'pending',
  Failure = 'failure'
}

export enum OrderTypes {
  FULL = 'FULL',
  PRESALE = 'PRESALE'
}

export interface Order {
  contact_id: string | null
  created_date: string
  currency: Currency
  email: string
  fullName: string
  funnel: string | null
  id: string
  invoice_id: string
  order_status: OrderStatuses
  order_type: OrderTypes
  package_id: string
  paied_date: string | null
  phone: string
  product_id: string
  product_type: string
  purchase: string
  subscribe: boolean
  total_amount: number
}
