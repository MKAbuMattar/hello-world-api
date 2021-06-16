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
      limit,
    } = queryObj

    const formatData = []

    for (const key in queryObj) {
      switch (key) {
        case 'language_short':
          helloWorldModle.find({ language_short: language_short }, (err, data) => {
            if (err) {
              console.log('======================================')
              console.log(err)
              console.log('======================================')
              return res.status(401).json({
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
          break
        case 'title':
          const sulg = `${title.toString("utf8")}`.toLowerCase().split(' ').join('-')
          helloWorldModle.find({ sulg: sulg }, (err, data) => {
            if (err) {
              console.log('======================================')
              console.log(err)
              console.log('======================================')
              return res.status(401).json({
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
          break
        case 'limit':
          helloWorldModle.find((err, data) => {
            if (err) {
              console.log('======================================')
              console.log(err)
              console.log('======================================')
              return res.status(401).json({
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
          }).limit(Number(limit))
          break
        default:
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
          break
      }
    }
  }
}

module.exports = {
  readHelloWorld,
}