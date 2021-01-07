const password = document.getElementById('password')
const confirm = document.getElementById('confirm')

function confirmPassword () {
  if (password.value !== confirm.value) {
    confirm.setCustomValidity("Passwords don't match.")
  } else {
    confirm.setCustomValidity('')
  }
}

password.onchange = confirmPassword
confirm.onkeyup = confirmPassword
