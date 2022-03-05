const input = document.querySelector('#input') as HTMLInputElement

const body = document.querySelector('body') as HTMLElement
const text = document.createElement('p') as HTMLParagraphElement
body.appendChild(text)

input.addEventListener('input', (event) => {
  const input = event.currentTarget as HTMLInputElement

  text.innerText = input.value
})