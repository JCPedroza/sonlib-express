const { hash } = require('bcrypt')

const User = require('../models/user-model')

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)

function get (req, res, nxt) {
  const title = 'Register'
  const interpols = { title }
  res.render('register', interpols)
}

async function post (req, res, nxt) {
  try {
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: await hash(req.body.password, SALT_ROUNDS),
      karma: 0
    }
    await User.create(user)
    res.redirect('/login')
  } catch (err) {
    nxt(err)
  }
}

module.exports = {
  get,
  post
}
