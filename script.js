document.querySelector('button').addEventListener('click', returnNumber)

function returnNumber() {
  let random = Math.floor(Math.random() * 10)
  let input = document.querySelector('input')
  console.log(random)
  if (input.value === random) {
    document.querySelector('h2').innerText ='YOU GUESSED THE RIGHT NUMBER!'
  } else {
    document.querySelector('h2').innerText = 'TRY AGAIN.'
  }
}