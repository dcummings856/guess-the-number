const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', returnNumber)

function returnNumber() {
  let random = Math.floor(Math.random() * 100)
  if (input.value === random) {
    document.querySelector('h2').innerText ='YOU GUESS THE RIGHT NUMBER'
  } else {
    document.querySelector('h2').innerText = 'Try again.'
  }
}