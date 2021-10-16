import express from 'express'
import router from './router/router'
import { PORT, DATABASE_URL } from './config/variables.config'
import connectDb from './config/db.config'

connectDb(DATABASE_URL)

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {})
