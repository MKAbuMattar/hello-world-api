import express from 'express'
import { getHelloWorldV1, getHelloWorldRandomV1, outV1, getHelloWorldV2 } from '../controllers'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    API: 'Work',
  })
})

const API_URL = [`/api/v1`, `/api/v2`]

router.get(`${API_URL[0]}/`, getHelloWorldV1)
router.get(`${API_URL[0]}/random`, getHelloWorldRandomV1)
router.get(`${API_URL[0]}/out`, outV1)
router.get(`${API_URL[1]}/`, getHelloWorldV2)

export default router
