const deliveryForm = document.querySelector('#order')
const sendButton = document.querySelector('#openOverlay')
const template = document.querySelector('#overlayTemplate').innerHTML
const overlay = createOverlay(template)
let sendStatus = false

sendButton.addEventListener('click', (event) => {
  event.preventDefault()
  let xhr
  if (validateForm(deliveryForm)) {
    const formData = new FormData()
    formData.append('name', deliveryForm.elements.name.value)
    formData.append('phone', deliveryForm.elements.phone.value)
    formData.append('comment', deliveryForm.elements.comment.value)
    formData.append('to', 'privet@pechenek.net')
    xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    if (!sendStatus) {
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail')
    } else {
      xhr.open('POST', 'https://webdev-api.loftschool.com')
    }
    sendStatus = !sendStatus
    xhr.send(formData)
    xhr.addEventListener('load', () => {
      overlay.open()
      document.body.classList.add('body__overlay')
      if (xhr.status === 200) {
        overlay.setContent('Loftschool на связи')
      } else {
        overlay.setContent('Ошибочка')
      }
    })
  }
})

function validateForm (form) {
  let valid = true
  if (!validateField(form.elements.name)) {
      valid = false
  }
  if (!validateField(form.elements.phone)) {
      valid = false
  }
  if (!validateField(form.elements.comment)) {
    valid = false
}
  return valid
}

function validateField (field) {
  field.nextElementSibling.textContent = field.validationMessage
  return field.checkValidity()
}

function createOverlay (template) {
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