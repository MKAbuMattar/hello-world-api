const mongoose = require('mongoose')

const connectDb = async (URL) => {

  const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }

  try {
    const connection = await mongoose.connect(URL, connectionParams)
    console.log('======================================')
    console.info(`Mongo DB is connected to: ${connection.connection.host}`)
    console.log('======================================')

  } catch (err) {
    console.log('======================================')
    console.log('An error ocurred')
    console.log('======================================')
    console.log(err)
    console.log('======================================')
  }
}

module.exports = connectDb