import clamp from 'lodash/clamp'
import * as config from '../env'

const { MAX_LIMIT, DEFAULT_LIMIT } = config

export const getPaginationParams = (params = {}) => {
  const limit = clamp(parseInt(params.limit), 1, MAX_LIMIT) || DEFAULT_LIMIT
  let page = Math.max(parseInt(params.page), 1) || 1
  let skip = clamp((page - 1) * limit, 1e4)

  if (params.skip !== undefined) {
    skip = clamp(parseInt(params.skip), 0, 1e4) || 0
    page = Math.floor(skip / limit) + 1
  }

  return { page, skip, limit }
}

export default getPaginationParams
