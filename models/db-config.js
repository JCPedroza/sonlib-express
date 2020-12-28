const schemaOptions = {
  timestamps: true
}

const mongoOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

const modelNames = {
  user: 'user'
}

module.exports = {
  schemaOptions,
  mongoOptions,
  modelNames
}
