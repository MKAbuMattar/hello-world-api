import express from 'express'
import router from './router/router'
import { PORT, DATABASE_URL } from './config/variables.config'
import onYourNetwork from './config/onYourNetwork.config'
import connectDb from './config/db.config'

connectDb(DATABASE_URL)

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  // const API_URL = [`/api/v1/`]
  // console.clear()
  // console.info(`
  //   Server running at
  //     Local:            http://localhost:${PORT}/
  //     On Your Network:  http://${Object.values(onYourNetwork)[0][0]}:${PORT}/
  //     --------------`)
})
