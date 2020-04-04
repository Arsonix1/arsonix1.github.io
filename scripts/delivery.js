const deliveryForm = document.querySelector('#order')
const sendButton = document.querySelector('#openDeliveryOverlay')
const template = document.querySelector('#deliveryModalTemplate').innerHTML
const overlay = createOverlay(template)
let sendStatus = false
const fields = ['name', 'phone', 'comment']

sendButton.addEventListener('click', (event) => {
  event.preventDefault()
  if (validateForm(deliveryForm)) {
    const formData = new FormData()
    fields.forEach(field => {
      formData.append(field, deliveryForm.elements[field].value)
    })
    formData.append('to', 'privet@pechenek.net')
    const xhr = new XMLHttpRequest()
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
        overlay.setContent('Сообщение отправлено')
      } else {
        overlay.setContent('Ошибочка')
      }
    })
  }
})

function validateForm (form) {
  let valid = true
  fields.forEach(field => {
    if (!validateField(form.elements[field])) {
      valid = false
    }
  })
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