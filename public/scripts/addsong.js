const buttonMinus = document.getElementById('button-minus')
const buttonPlus = document.getElementById('button-plus')
const fieldAuthors = document.getElementById('field-authors')

const MAX_AUTHORS = 20
const prefixAuthor = 'author-'
const prefixRole = 'role-'
const authors = []
const roles = []
const boxes = []

function inputText (id, name, isRequired = true) {
  const input = document.createElement('input')
  input.type = 'text'
  input.id = id
  input.name = name
  input.required = isRequired
  return input
}

function dynamicId (prefix, array) {
  return `${prefix}${array.length}`
}

function addAuthor () {
  if (authors.length < MAX_AUTHORS) {
    const idAuthor = dynamicId(prefixAuthor, authors)
    const idRole = dynamicId(prefixRole, roles)
    const author = inputText(idAuthor, 'author')
    const role = inputText(idRole, 'role')
    const box = document.createElement('div')

    box.appendChild(author)
    box.appendChild(role)
    box.class = 'box-twintext'
    fieldAuthors.appendChild(box)

    boxes.push(box)
    authors.push(author)
    roles.push(role)
  }
}

function removeAuthor () {
  if (authors.length > 0) {
    const box = boxes.pop()
    box.removeChild(authors.pop())
    box.removeChild(roles.pop())
    fieldAuthors.removeChild(box)
  }
}

buttonMinus.onclick = removeAuthor
buttonPlus.onclick = addAuthor
