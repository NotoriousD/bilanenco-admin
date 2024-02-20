/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOrders = /* GraphQL */ `mutation CreateOrders(
  $input: CreateOrdersInput!
  $condition: ModelOrdersConditionInput
) {
  createOrders(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrdersMutationVariables,
  APITypes.CreateOrdersMutation
>;
export const updateOrders = /* GraphQL */ `mutation UpdateOrders(
  $input: UpdateOrdersInput!
  $condition: ModelOrdersConditionInput
) {
  updateOrders(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrdersMutationVariables,
  APITypes.UpdateOrdersMutation
>;
export const deleteOrders = /* GraphQL */ `mutation DeleteOrders(
  $input: DeleteOrdersInput!
  $condition: ModelOrdersConditionInput
) {
  deleteOrders(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrdersMutationVariables,
  APITypes.DeleteOrdersMutation
>;
