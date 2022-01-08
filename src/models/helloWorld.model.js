import { Schema, model } from 'mongoose'

const helloWorldSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  sulg: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },

  description: {
    type: String,
    default: null,
  },

  url: {
    type: String,
    default: null,
  },

  language_short: {
    type: String,
    default: null,
  },

  code: {
    type: String,
    require: true,
  },
})

const helloWorldModel = model('HelloWorld', helloWorldSchema)

export default helloWorldModel
