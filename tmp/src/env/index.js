import * as environment from './environment'

export const { PORT } = environment
export const { DATABASE_URL } = environment

export const MAX_LIMIT = 150
export const DEFAULT_LIMIT = 20

export default { PORT, DATABASE_URL, MAX_LIMIT, DEFAULT_LIMIT }
