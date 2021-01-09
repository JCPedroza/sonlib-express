function get (req, res, nxt) {
  const title = 'Add Song'
  const interpols = { title }
  res.render('addsong', interpols)
}

module.exports = {
  get
}
