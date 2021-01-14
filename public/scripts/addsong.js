const divAuthors = document.getElementById('div-authors')
const buttonMinus = document.getElementById('button-minus')
const buttonPlus = document.getElementById('button-plus')

const MAX_AUTHORS = 20
const prefixName = 'name-'
const prefixRole = 'role-'
const names = []
const roles = []
const authors = []

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
  if (names.length < MAX_AUTHORS) {
    const idName = dynamicId(prefixName, names)
    const idRole = dynamicId(prefixRole, roles)
    const name = inputText(idName, 'authorname')
    const role = inputText(idRole, 'role')
    const div = document.createElement('div')

    div.appendChild(name)
    div.appendChild(role)
    div.class = 'div-twintext'
    divAuthors.appendChild(div)

    authors.push(div)
    names.push(name)
    roles.push(role)
  }
}

function removeAuthor () {
  if (names.length > 0) {
    const div = authors.pop()
    div.removeChild(names.pop())
    div.removeChild(roles.pop())
    divAuthors.removeChild(div)
  }
}

buttonMinus.onclick = removeAuthor
buttonPlus.onclick = addAuthor
