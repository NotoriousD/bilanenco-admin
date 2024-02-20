/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOrders = /* GraphQL */ `subscription OnCreateOrders($filter: ModelSubscriptionOrdersFilterInput) {
  onCreateOrders(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrdersSubscriptionVariables,
  APITypes.OnCreateOrdersSubscription
>;
export const onUpdateOrders = /* GraphQL */ `subscription OnUpdateOrders($filter: ModelSubscriptionOrdersFilterInput) {
  onUpdateOrders(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrdersSubscriptionVariables,
  APITypes.OnUpdateOrdersSubscription
>;
export const onDeleteOrders = /* GraphQL */ `subscription OnDeleteOrders($filter: ModelSubscriptionOrdersFilterInput) {
  onDeleteOrders(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrdersSubscriptionVariables,
  APITypes.OnDeleteOrdersSubscription
>;
