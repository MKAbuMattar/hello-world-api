import express from 'express'
import {
  readHelloWorld,
  readHelloWorldRandom,
  readHelloWorldRAW,
  readHelloWorldRAWRandom,
  readHelloWorldFront,
} from '../controllers/read.helloWorld.conteraller.v1'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    API: 'Work',
  })
})

const API_URL = [`/api/v1/`]

router.get(`${API_URL[0]}`, readHelloWorld)
router.get(`${API_URL[0]}random`, readHelloWorldRandom)
router.get(`${API_URL[0]}raw`, readHelloWorldRAW)
router.get(`${API_URL[0]}raw/random`, readHelloWorldRAWRandom)
router.get(`/api`, readHelloWorldFront)

export default router
