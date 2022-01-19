import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import router from './router'
import { DATABASE_URL } from './env'
import connectDb from './config'

connectDb(DATABASE_URL)

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use(router)

export default app
