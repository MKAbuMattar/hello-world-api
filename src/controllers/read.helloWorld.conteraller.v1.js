import helloWorldModle from '../models/helloWorld.model'
import helloWorldAPIModel from '../models/helloWorldAPI.model'

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const readHelloWorldRAW = async (req, res) => {
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
          data: data,
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
              if (
                result.language_short
                  .toLowerCase()
                  .includes(`${language_short}`.toLowerCase())
              )
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
              if (result.title.toLowerCase() === `${title}`.toLowerCase())
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
          case 'qtitle':
            data.forEach((result) => {
              if (
                result.title.toLowerCase().includes(`${qtitle}`.toLowerCase())
              )
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
              if (
                result.title.charAt(0).toLowerCase() ===
                `${qAlphabet}`.toLowerCase()
              )
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

export const readHelloWorldRAWRandom = async (req, res) => {
  helloWorldModle.find({}, (err, data) => {
    if (err) {
      res.status(401).json({
        errors: err,
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: data[getRndInteger(0, data.length - 1)],
      })
    }
  })
}

export const readHelloWorld = async (req, res) => {
  const numOfQueries = Object.keys(req.query).length

  if (numOfQueries === 0) {
    const formatData = []
    helloWorldModle.find({}, (err, data) => {
      if (err) {
        console.log('======================================')
        console.log(err)
        console.log('======================================')
        res.status(401).json({
          errors: err,
        })
      } else {
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
          res.status(200).json({
            success: true,
            totalCount: formatData.length,
            data: formatData,
          })
        }
      }
    })
  } else {
    const queryObj = req.query

    const { language_short, title, qtitle, qAlphabet, limit } = queryObj

    const formatData = []
    const resultData = []

    helloWorldModle.find({}, (err, data) => {
      if (err) {
        console.log('======================================')
        console.log(err)
        console.log('======================================')
        res.status(401).json({
          errors: err,
        })
      } else {
        data.sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
        data.forEach((result, idx) => {
          formatData.push(new helloWorldAPIModel(result, idx))
        })

        for (const key in queryObj) {
          switch (key) {
            case 'language_short':
              formatData.forEach((result) => {
                if (
                  result.language_short
                    .toLowerCase()
                    .includes(`${language_short}`.toLowerCase())
                )
                  resultData.push(result)
              })

              if (err) {
                res.status(401).json({
                  errors: err,
                })
              } else {
                res.status(200).json({
                  success: true,
                  totalCount: formatData.length,
                  data: resultData,
                })
              }
              break
            case 'title':
              formatData.forEach((result) => {
                if (result.title.toLowerCase() === `${title}`.toLowerCase())
                  resultData.push(result)
              })

              if (err) {
                res.status(401).json({
                  errors: err,
                })
              } else {
                res.status(200).json({
                  success: true,
                  totalCount: formatData.length,
                  data: resultData,
                })
              }
              break
            case 'qtitle':
              formatData.forEach((result) => {
                if (
                  result.title.toLowerCase().includes(`${qtitle}`.toLowerCase())
                )
                  resultData.push(result)
              })

              if (err) {
                res.status(401).json({
                  errors: err,
                })
              } else {
                res.status(200).json({
                  success: true,
                  totalCount: formatData.length,
                  data: resultData,
                })
              }
              break
            case 'qAlphabet':
              formatData.forEach((result) => {
                if (
                  result.title.charAt(0).toLowerCase() ===
                  `${qAlphabet}`.toLowerCase()
                )
                  resultData.push(result)
              })

              if (err) {
                res.status(401).json({
                  errors: err,
                })
              } else {
                res.status(200).json({
                  success: true,
                  totalCount: formatData.length,
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
                  totalCount: formatData.length,
                  data: formatData.slice(0, Number(limit)),
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
                  totalCount: formatData.length,
                  data: resultData,
                })
              }
              break
          }
          break
        }
      }
    })
  }
}

export const readHelloWorldRandom = async (req, res) => {
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
      res.status(200).json({
        success: true,
        totalCount: formatData.length,
        data: formatData[getRndInteger(0, formatData.length - 1)],
      })
    }
  })
}

export const readHelloWorldFront = async (req, res) => {
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
      res.status(200).json(formatData)
    }
  })
}
