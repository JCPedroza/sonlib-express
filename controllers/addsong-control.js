const Song = require('../models/song-model')

const prefixAuthor = 'author-'
const prefixRole = 'role-'

function get (req, res, nxt) {
  const title = 'Add Song'
  const interpols = { title }
  res.render('addsong', interpols)
}

async function post (req, res, nxt) {
  const song = {
    name: req.body.name,
    authorArray: getAuthors(req),
    tagArray: getTags(req),
    year: req.body.year,
    key: req.body.key,
    chords: req.body.chords,
    createdBy: req.user._id
  }

  try {
    await Song.create(song)
    res.redirect('/songs')
  } catch (err) {
    nxt(err)
  }
}

function getAuthors (req) {
  const names = req.body.author
  const roles = req.body.role
  const authors = []

  while (names.length > 0) {
    authors.push({
      name: names.pop(),
      role: roles.pop()
    })
  }

  return authors
}

function getTags (req) {
  return req.body.tags.split(',').map(tag => tag.trim())
}

module.exports = {
  get,
  post
}
