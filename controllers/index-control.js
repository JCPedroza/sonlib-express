function get (req, res, nxt) {
  const title = 'Index'
  const username = req.user.username
  const interpols = { title, username }
  res.render('index', interpols)
}

module.exports = {
  get
}
