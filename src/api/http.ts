import { get, post, put, del, patch } from 'aws-amplify/api'

interface AWSBaseRequest {
  apiName: string
  path: string
  headers?: { [key: string]: any }
  queryParams?: { [key: string]: any }
}

interface AWSPostRequest extends AWSBaseRequest {
  body: string
}

export const AWSRequests = {
  async handleGet<T>({ apiName, path, headers, queryParams }: AWSBaseRequest) {
    try {
      const { body } = await get({
        apiName,
        path,
        options: {
          headers,
          queryParams
        }
      }).response
      return await body.json()
    } catch (e) {
      console.error(e)
    }
  },

  async handlePost<T>({
    apiName,
    path,
    headers,
    body,
    queryParams
  }: AWSPostRequest) {
    try {
      const response = await post({
        apiName,
        path,
        options: {
          body,
          headers,
          queryParams
        }
      }).response
      return await response.body.json()
    } catch (e) {
      console.error(e)
    }
  },

  async handlePut<T>({
    apiName,
    path,
    headers,
    body,
    queryParams
  }: AWSPostRequest) {
    try {
      const response = await put({
        apiName,
        path,
        options: {
          body,
          headers,
          queryParams
        }
      }).response
      return await response.body.json()
    } catch (e) {
      console.error(e)
    }
  },

  async handlePatch<T>({
    apiName,
    path,
    headers,
    body,
    queryParams
  }: AWSPostRequest) {
    try {
      const response = await patch({
        apiName,
        path,
        options: {
          body,
          headers,
          queryParams
        }
      }).response
      return await response.body.json()
    } catch (e) {
      console.error(e)
    }
  },

  async handleDelete<T>({
    apiName,
    path,
    headers,
    queryParams
  }: AWSBaseRequest) {
    try {
      const response = await del({
        apiName,
        path,
        options: {
          headers,
          queryParams
        }
      }).response
      return await response
    } catch (e) {
      console.error(e)
    }
  }
}
