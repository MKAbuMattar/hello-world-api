import helloWorldModle from '../models'
import getPaginationParams from '../utils/getPaginationParams'

export const getHelloWorld = async (req, res, next) => {
  try {
    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      helloWorldModle.find({}).sort({ title: 1 }).limit(limit).skip(skip),

      helloWorldModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(totalCount / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
  } catch (error) {
    return next(error)
  }
}
