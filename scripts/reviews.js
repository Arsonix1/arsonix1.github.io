const moreButtons = $('.wrapper').find('.reviews__button')
const template = document.querySelector('#reviewsModalTemplate').innerHTML
const overlay = createOverlay(template)

moreButtons.each((ndx, item) => {
  $(item).on('click', event => {
    event.preventDefault()
    const name = $(item).parent().children('.review__name').text()
    overlay.open()
    document.body.classList.add('body__overlay')
    overlay.setName(name)
    overlay.setText('Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.')
  })
})

function createOverlay (template) {
  const fragment = document.createElement('div')
  fragment.innerHTML = template
  const overlayElement = fragment.querySelector('.review__modal-overlay')
  const nameElement = fragment.querySelector('.review__modal-name')
  const textElement = fragment.querySelector('.review__modal-text')
  const closeElement = fragment.querySelector('.review__modal-close')
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
    setName(name) {
      nameElement.innerHTML = name
    },
    setText(text) {
      textElement.innerHTML = text
    }
  }
}