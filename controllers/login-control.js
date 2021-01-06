const passport = require('passport')

function get (req, res, nxt) {
  const title = 'Login'
  const status = req.flash('error')
  const interpols = { title, status }
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
