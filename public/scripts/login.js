const password = document.getElementById('password')
const showPswdButton = document.getElementById('showPswdButton')

function togglePswdVisibility () {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
}

showPswdButton.onclick = togglePswdVisibility
