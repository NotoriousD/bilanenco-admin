/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOrders = /* GraphQL */ `query GetOrders($id: ID!) {
  getOrders(id: $id) {
    id
    contact_id
    created_date
    currency
    email
    fullName
    funnel
    invoice_id
    order_status
    order_type
    package_id
    paied_date
    phone
    product_id
    product_type
    purchase
    subscribe
    total_amount
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrdersQueryVariables, APITypes.GetOrdersQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrdersFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      contact_id
      created_date
      currency
      email
      fullName
      funnel
      invoice_id
      order_status
      order_type
      package_id
      paied_date
      phone
      product_id
      product_type
      purchase
      subscribe
      total_amount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    scannedCount
    count
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
