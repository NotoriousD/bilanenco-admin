/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrdersInput = {
  id?: string | null
  contact_id?: string | null
  created_date?: string | null
  currency: string
  email: string
  fullName: string
  funnel?: string | null
  invoice_id?: string | null
  order_status: string
  order_type: string
  package_id?: string | null
  paied_date?: string | null
  phone: string
  product_id: string
  product_type: string
  purchase: string
  subscribe: boolean
  total_amount: number
  createdAt?: string | null
  updatedAt?: string | null
}

export type ModelOrdersConditionInput = {
  contact_id?: ModelStringInput | null
  created_date?: ModelStringInput | null
  currency?: ModelStringInput | null
  email?: ModelStringInput | null
  fullName?: ModelStringInput | null
  funnel?: ModelStringInput | null
  invoice_id?: ModelStringInput | null
  order_status?: ModelStringInput | null
  order_type?: ModelStringInput | null
  package_id?: ModelStringInput | null
  paied_date?: ModelStringInput | null
  phone?: ModelStringInput | null
  product_id?: ModelStringInput | null
  product_type?: ModelStringInput | null
  purchase?: ModelStringInput | null
  subscribe?: ModelBooleanInput | null
  total_amount?: ModelIntInput | null
  createdAt?: ModelStringInput | null
  updatedAt?: ModelStringInput | null
  and?: Array<ModelOrdersConditionInput | null> | null
  or?: Array<ModelOrdersConditionInput | null> | null
  not?: ModelOrdersConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null'
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type ModelBooleanInput = {
  ne?: boolean | null
  eq?: boolean | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type ModelIntInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type Orders = {
  __typename: 'Orders'
  id: string
  contact_id?: string | null
  created_date?: string | null
  currency: string
  email: string
  fullName: string
  funnel?: string | null
  invoice_id?: string | null
  order_status: string
  order_type: string
  package_id?: string | null
  paied_date?: string | null
  phone: string
  product_id: string
  product_type: string
  purchase: string
  subscribe: boolean
  total_amount: number
  createdAt?: string | null
  updatedAt?: string | null
}

export type UpdateOrdersInput = {
  id: string
  contact_id?: string | null
  created_date?: string | null
  currency?: string | null
  email?: string | null
  fullName?: string | null
  funnel?: string | null
  invoice_id?: string | null
  order_status?: string | null
  order_type?: string | null
  package_id?: string | null
  paied_date?: string | null
  phone?: string | null
  product_id?: string | null
  product_type?: string | null
  purchase?: string | null
  subscribe?: boolean | null
  total_amount?: number | null
  createdAt?: string | null
  updatedAt?: string | null
}

export type DeleteOrdersInput = {
  id: string
}

export type ModelOrdersFilterInput = {
  id?: ModelIDInput | null
  contact_id?: ModelStringInput | null
  created_date?: ModelStringInput | null
  currency?: ModelStringInput | null
  email?: ModelStringInput | null
  fullName?: ModelStringInput | null
  funnel?: ModelStringInput | null
  invoice_id?: ModelStringInput | null
  order_status?: ModelStringInput | null
  order_type?: ModelStringInput | null
  package_id?: ModelStringInput | null
  paied_date?: ModelStringInput | null
  phone?: ModelStringInput | null
  product_id?: ModelStringInput | null
  product_type?: ModelStringInput | null
  purchase?: ModelStringInput | null
  subscribe?: ModelBooleanInput | null
  total_amount?: ModelIntInput | null
  createdAt?: ModelStringInput | null
  updatedAt?: ModelStringInput | null
  and?: Array<ModelOrdersFilterInput | null> | null
  or?: Array<ModelOrdersFilterInput | null> | null
  not?: ModelOrdersFilterInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type ModelOrdersConnection = {
  __typename: 'ModelOrdersConnection'
  items: Array<Orders | null>
  nextToken?: string | null
}

export type ModelSubscriptionOrdersFilterInput = {
  id?: ModelSubscriptionIDInput | null
  contact_id?: ModelSubscriptionStringInput | null
  created_date?: ModelSubscriptionStringInput | null
  currency?: ModelSubscriptionStringInput | null
  email?: ModelSubscriptionStringInput | null
  fullName?: ModelSubscriptionStringInput | null
  funnel?: ModelSubscriptionStringInput | null
  invoice_id?: ModelSubscriptionStringInput | null
  order_status?: ModelSubscriptionStringInput | null
  order_type?: ModelSubscriptionStringInput | null
  package_id?: ModelSubscriptionStringInput | null
  paied_date?: ModelSubscriptionStringInput | null
  phone?: ModelSubscriptionStringInput | null
  product_id?: ModelSubscriptionStringInput | null
  product_type?: ModelSubscriptionStringInput | null
  purchase?: ModelSubscriptionStringInput | null
  subscribe?: ModelSubscriptionBooleanInput | null
  total_amount?: ModelSubscriptionIntInput | null
  createdAt?: ModelSubscriptionStringInput | null
  updatedAt?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionOrdersFilterInput | null> | null
  or?: Array<ModelSubscriptionOrdersFilterInput | null> | null
}

export type ModelSubscriptionIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null
  eq?: boolean | null
}

export type ModelSubscriptionIntInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  in?: Array<number | null> | null
  notIn?: Array<number | null> | null
}

export type CreateOrdersMutationVariables = {
  input: CreateOrdersInput
  condition?: ModelOrdersConditionInput | null
}

export type CreateOrdersMutation = {
  createOrders?: {
    __typename: 'Orders'
    id: string
    contact_id?: string | null
    created_date?: string | null
    currency: string
    email: string
    fullName: string
    funnel?: string | null
    invoice_id?: string | null
    order_status: string
    order_type: string
    package_id?: string | null
    paied_date?: string | null
    phone: string
    product_id: string
    product_type: string
    purchase: string
    subscribe: boolean
    total_amount: number
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type UpdateOrdersMutationVariables = {
  input: UpdateOrdersInput
  condition?: ModelOrdersConditionInput | null
}

export type UpdateOrdersMutation = {
  updateOrders?: {
    __typename: 'Orders'
    id: string
    contact_id?: string | null
    created_date?: string | null
    currency: string
    email: string
    fullName: string
    funnel?: string | null
    invoice_id?: string | null
    order_status: string
    order_type: string
    package_id?: string | null
    paied_date?: string | null
    phone: string
    product_id: string
    product_type: string
    purchase: string
    subscribe: boolean
    total_amount: number
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type DeleteOrdersMutationVariables = {
  input: DeleteOrdersInput
  condition?: ModelOrdersConditionInput | null
}

export type DeleteOrdersMutation = {
  deleteOrders?: {
    __typename: 'Orders'
    id: string
    contact_id?: string | null
    created_date?: string | null
    currency: string
    email: string
    fullName: string
    funnel?: string | null
    invoice_id?: string | null
    order_status: string
    order_type: string
    package_id?: string | null
    paied_date?: string | null
    phone: string
    product_id: string
    product_type: string
    purchase: string
    subscribe: boolean
    total_amount: number
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type GetOrdersQueryVariables = {
  id: string
}

export type GetOrdersQuery = {
  getOrders?: {
    __typename: 'Orders'
    id: string
    contact_id?: string | null
    created_date?: string | null
    currency: string
    email: string
    fullName: string
    funnel?: string | null
    invoice_id?: string | null
    order_status: string
    order_type: string
    package_id?: string | null
    paied_date?: string | null
    phone: string
    product_id: string
    product_type: string
    purchase: string
    subscribe: boolean
    total_amount: number
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type ListOrdersQueryVariables = {
  filter?: ModelOrdersFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListOrdersQuery = {
  listOrders?: {
    __typename: 'ModelOrdersConnection'
    items: Array<{
      __typename: 'Orders'
      id: string
      contact_id?: string | null
      created_date?: string | null
      currency: string
      email: string
      fullName: string
      funnel?: string | null
      invoice_id?: string | null
      order_status: string
      order_type: string
      package_id?: string | null
      paied_date?: string | null
      phone: string
      product_id: string
      product_type: string
      purchase: string
      subscribe: boolean
      total_amount: number
      createdAt?: string | null
      updatedAt?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type OnCreateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null
}

export type OnCreateOrdersSubscription = {
  onCreateOrders?: {
    __typename: 'Orders'
    id: string
    contact_id?: string | null
    created_date?: string | null
    currency: string
    email: string
    fullName: string
    funnel?: string | null
    invoice_id?: string | null
    order_status: string
    order_type: string
    package_id?: string | null
    paied_date?: string | null
    phone: string
    product_id: string
    product_type: string
    purchase: string
    subscribe: boolean
    total_amount: number
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type OnUpdateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null
}

export type OnUpdateOrdersSubscription = {
  onUpdateOrders?: {
    __typename: 'Orders'
    id: string
    contact_id?: string | null
    created_date?: string | null
    currency: string
    email: string
    fullName: string
    funnel?: string | null
    invoice_id?: string | null
    order_status: string
    order_type: string
    package_id?: string | null
    paied_date?: string | null
    phone: string
    product_id: string
    product_type: string
    purchase: string
    subscribe: boolean
    total_amount: number
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type OnDeleteOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null
}

export type OnDeleteOrdersSubscription = {
  onDeleteOrders?: {
    __typename: 'Orders'
    id: string
    contact_id?: string | null
    created_date?: string | null
    currency: string
    email: string
    fullName: string
    funnel?: string | null
    invoice_id?: string | null
    order_status: string
    order_type: string
    package_id?: string | null
    paied_date?: string | null
    phone: string
    product_id: string
    product_type: string
    purchase: string
    subscribe: boolean
    total_amount: number
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}
