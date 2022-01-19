import mongoose from 'mongoose'

const connectDb = async (URL) => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    const connection = await mongoose.connect(URL, connectionParams)
    console.log('======================================')
    console.info(`Mongo DB is connected to: ${connection.connection.host}`)
    console.log('======================================')
  } catch (err) {
    console.log('======================================')
    console.error(`An error ocurred\n\r\n\r${err}`)
    console.log('======================================')
  }
}

export default connectDb
