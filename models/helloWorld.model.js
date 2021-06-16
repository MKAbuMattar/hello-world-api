const mongoose = require('mongoose')

const helloWorldSchema = new mongoose.Schema({

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
  }

})

module.exports = mongoose.model('HelloWorld', helloWorldSchema)