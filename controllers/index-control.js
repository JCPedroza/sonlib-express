function get (req, res, nxt) {
  const title = 'Index'
  const username = 'Smash'
  const interpols = { title, username}
  res.render('index', interpols)
}

module.exports = {
  get
}
