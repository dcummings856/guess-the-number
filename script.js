document.querySelector('button').addEventListener('click', returnNumber)

function returnNumber() {
  let random = Math.floor(Math.random() * 5)
  let input = document.querySelector('input')
  console.log(random)
  console.log(input.value)
  if (Number(input.value) === random) {
    document.querySelector('h2').innerText =`YOU GUESSED THE RIGHT NUMBER! ${input.value}`
    input.value = Number('')
  } else if(Number(input.value) !== random) {
    document.querySelector('h2').innerText = `YOU GUESSED ${input.value}, THE NUMBER WAS ${random}`
    input.value = Number('')
  }
}