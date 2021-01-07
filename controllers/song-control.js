const { Song } = require('../models/song-model')

function get (req, res, nxt) {
  const title = 'Songs'
  const interpols = { title }
  res.render('songs', interpols)
}

async function post (req, res, nxt) {
  const song = {
    name: req.body.name,
    year: req.body.year,
    key: req.body.key,
    chords: req.body.chords
  }

  try {
    await Song.create(song)
    res.redirect('/songs')
  } catch (err) {
    nxt(err)
  }
}

module.exports = {
  get,
  post
}
