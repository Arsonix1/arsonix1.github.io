const openButton = document.querySelector('#openOverlay')
const template = document.querySelector('#overlayTemplate').innerHTML
const overlay = createOverlay(template)

openButton.addEventListener('click', (event) => {
  event.preventDefault()
  document.body.classList.add('body__overlay')
  overlay.open()
  overlay.setContent('Тест123')
})

function createOverlay(template) {
  const fragment = document.createElement('div')
  fragment.innerHTML = template
  const overlayElement = fragment.querySelector('.modal-overlay')
  const contentElement = fragment.querySelector('.modal-content')
  const closeElement = fragment.querySelector('.modal-close')
  overlayElement.addEventListener('click', (event) => {
    if (event.target === overlayElement) {
      closeElement.click()
    }
  })
  closeElement.addEventListener('click', (event) => {
    event.preventDefault()
    document.body.classList.remove('body__overlay')
    document.body.removeChild(overlayElement)
  })
  return {
    open() {
      document.body.appendChild(overlayElement)
    },
    close() {
      closeElement.click()
    },
    setContent(content) {
      contentElement.innerHTML = content;
    }
  }
}