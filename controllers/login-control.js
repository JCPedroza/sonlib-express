const passport = require('passport')

function get (req, res, nxt) {
  const title = 'Login'
  const interpols = { title }
  res.render('login', interpols)
}

const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
})

module.exports = {
  get,
  post
}
