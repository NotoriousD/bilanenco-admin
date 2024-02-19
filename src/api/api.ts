import { get } from 'aws-amplify/api'

export const apiCall = async (apiName: string, path: string) => {
  const restOperation = await get({
    apiName: apiName,
    path: path
  })
  const { body } = await restOperation.response
  const response = await body.json()
  return response
}
