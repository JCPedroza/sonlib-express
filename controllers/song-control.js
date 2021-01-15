const Song = require('../models/song-model')

async function get (req, res, nxt) {
  try {
    const limit = 10
    const filter = {}
    const projection = { name: 1, key: 1, year: 1 }
    const options = { limit }
    const title = 'Songs'
    const queryResults = await Song.find(filter, projection, options)
    const interpols = { title, queryResults }
    res.render('songs', interpols)
  } catch (err) {
    nxt(err)
  }
}

module.exports = {
  get
}
