const helloWorldModle = require('../models/helloWorld.model')
const helloWorldAPIModel = require(`../models/helloWorldAPI.model`)

const readHelloWorld = async (req, res) => {

  const numOfQueries = Object.keys(req.query).length

  if (numOfQueries === 0) {
    const formatData = []
    helloWorldModle.find({}, (err, data) => {
      if (err) {
        console.log('======================================')
        console.log(err)
        console.log('======================================')
        res.status(401).json({
          errors: err
        })
      } else {
        data.sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
        data.forEach((result, idx) => {
          formatData.push((new helloWorldAPIModel(result, idx)))
        })
        res.json(formatData)
      }
    })
  } else {
    const queryObj = req.query

    const {
      language_short,
      title,
      qtitle,
      qAlphabet,
      limit,
    } = queryObj

    const formatData = []
    const resultData = []

    helloWorldModle.find({}, (err, data) => {
      if (err) {
        console.log('======================================')
        console.log(err)
        console.log('======================================')
        res.status(401).json({
          errors: err
        })
      } else {
        data.sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
        data.forEach((result, idx) => {
          formatData.push((new helloWorldAPIModel(result, idx)))
        })

        for (const key in queryObj) {
          switch (key) {
            case 'language_short':
              formatData.forEach(result => {
                if ((result.language_short).toLowerCase().includes(`${language_short}`.toLowerCase()))
                  resultData.push(result)
              })
              res.json(resultData)
              break
            case 'title':
              formatData.forEach(result => {
                if ((result.title).toLowerCase() === `${title}`.toLowerCase())
                  resultData.push(result)
              })
              res.json(resultData)
              break
            case 'qtitle':
              formatData.forEach(result => {
                if ((result.title).toLowerCase().includes(`${qtitle}`.toLowerCase()))
                  resultData.push(result)
              })
              res.json(resultData)
              break
            case 'qAlphabet':
              formatData.forEach(result => {
                if ((result.title).charAt(0).toLowerCase() === `${qAlphabet}`.toLowerCase())
                  resultData.push(result)
              })
              res.json(resultData)
              break
            case 'limit':
              res.json(formatData.slice(0, Number(limit)))
              break
            default:
              res.json(formatData)
              break
          }
          break
        }
      }
    })
  }
}

module.exports = {
  readHelloWorld,
}