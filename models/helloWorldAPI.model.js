class HelloWorldAPI {
  constructor(data, idx) {
    this.id = `${idx}`
    this.title = data.title
    this.description = data.description
    this.url = data.url
    this.language_short = data.language_short
    this.code = data.code
  }
}

module.exports = HelloWorldAPI