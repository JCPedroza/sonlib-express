function get (req, res, nxt) {
  const username = req.user.username
  const interpols = { username }
  res.render('logout', interpols)
}

function post (req, res, nxt) {
  req.logOut()
  res.redirect('/login')
}

module.exports = {
  get,
  post
}
