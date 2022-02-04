import { Handler } from "@netlify/functions"
import { createErrorResponse } from './utils/response'

export const handler: Handler = async event => {
  return createErrorResponse(404, 'Invalid route')
}
