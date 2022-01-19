import fs from 'fs'
import path from 'path'

import helloWorldModle, { helloWorldAPIModel } from '../models'
import { getRandom } from '../utils'

export const getHelloWorld = async (req, res) => {
  const numOfQueries = Object.keys(req.query).length

  if (numOfQueries === 0) {
    helloWorldModle.find({}, (err, data) => {
      if (err) {
        res.status(401).json({
          errors: err,
        })
      } else {
        res.status(200).json({
          success: true,
          totalCount: data.length,
          data: data.sort((a, b) => {
            return a.title.localeCompare(b.title)
          }),
        })
      }
    })
  } else {
    const queryObj = req.query

    const { language_short, title, qtitle, qAlphabet, limit } = queryObj

    const resultData = []

    helloWorldModle.find({}, (err, data) => {
      for (const key in queryObj) {
        switch (key) {
          case 'language_short':
            data.forEach((result) => {
              if (result.language_short.toLowerCase().includes(`${language_short}`.toLowerCase()))
                resultData.push(result)
            })

            if (err) {
              res.status(401).json({
                errors: err,
              })
            } else {
              res.status(200).json({
                success: true,
                totalCount: data.length,
                data: resultData,
              })
            }
            break
          case 'title':
            data.forEach((result) => {
              if (result.title.toLowerCase() === `${title}`.toLowerCase()) resultData.push(result)
            })

            if (err) {
              res.status(401).json({
                errors: err,
              })
            } else {
              res.status(200).json({
                success: true,
                totalCount: data.length,
                data: resultData,
              })
            }
            break
          case 'qtitle':
            data.forEach((result) => {
              if (result.title.toLowerCase().includes(`${qtitle}`.toLowerCase()))
                resultData.push(result)
            })

            if (err) {
              res.status(401).json({
                errors: err,
              })
            } else {
              res.status(200).json({
                success: true,
                totalCount: data.length,
                data: resultData,
              })
            }
            break
          case 'qAlphabet':
            data.forEach((result) => {
              if (result.title.charAt(0).toLowerCase() === `${qAlphabet}`.toLowerCase())
                resultData.push(result)
            })

            if (err) {
              res.status(401).json({
                errors: err,
              })
            } else {
              res.status(200).json({
                success: true,
                totalCount: data.length,
                data: resultData,
              })
            }
            break
          case 'limit':
            if (err) {
              res.status(401).json({
                errors: err,
              })
            } else {
              res.status(200).json({
                success: true,
                totalCount: data.length,
                data: data.slice(0, Number(limit)),
              })
            }
            break
          default:
            if (err) {
              res.status(401).json({
                errors: err,
              })
            } else {
              res.status(200).json({
                success: true,
                totalCount: data.length,
                data: resultData,
              })
            }
            break
        }
        break
      }
    })
  }
}

export const getHelloWorldRandom = async (req, res) => {
  helloWorldModle.find({}, (err, data) => {
    if (err) {
      res.status(401).json({
        errors: err,
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: data[getRandom(0, data.length - 1)],
      })
    }
  })
}

export const out = async (req, res) => {
  const formatData = []

  helloWorldModle.find({}, (err, data) => {
    data.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })

    data.forEach((result, idx) => {
      formatData.push(new helloWorldAPIModel(result, idx))
    })

    if (err) {
      res.status(401).json({
        errors: err,
      })
    } else {
      fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(formatData))

      res.status(200).json({
        success: true,
        totalCount: formatData.length,
      })
    }
  })
}

export default {
  getHelloWorld,
  getHelloWorldRandom,
  out,
}
