const express = require(`express`)
const cors = require(`cors`)
require('dotenv').config()
const connectDb = require(`./config/db`)
const readHelloWorldConteraller = require('./controllers/read.helloWorld.conteraller')

const PORT = process.env.PORT

connectDb(process.env.DATABASE_URL)

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    "Server": "wark"
  })
})

app.get('/api', readHelloWorldConteraller.readHelloWorld)

app.listen(PORT, '0.0.0.0', () => {
  console.clear()
  console.log(`
  Server running at

    Local:            http://localhost:${PORT}/
    On Your Network:  http://127.0.0.1:${PORT}/
  `)
})