const schemaOptions = {
  timestamps: true
}

const mongoOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}

const modelNames = {
  user: 'user',
  song: 'song'
}

const messages = {
  yearValidator: 'Year must be an integer.',
  emailValidator: 'Invalid email'
}

module.exports = {
  schemaOptions,
  mongoOptions,
  modelNames,
  messages
}
