const deliveryForm = document.querySelector('#order')
const sendButton = document.querySelector('#openOverlay')
const template = document.querySelector('#overlayTemplate').innerHTML
const overlay = createOverlay(template)

sendButton.addEventListener('click', (event) => {
  event.preventDefault()
  if (validateForm(deliveryForm)) {
    const data = {
      name: deliveryForm.elements.name.name,
      phone: deliveryForm.elements.phone.value,
      comment: deliveryForm.elements.comment.value,
      email: 'privet@pechenek.net'
    }
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail')
    xhr.send(JSON.stringify(data))
    xhr.addEventListener('load', () => {
      console.log(xhr.response)
  });
    // xhr.addEventListener('load', () => {
    //     if (xhr.status === 404) {
    //         console.log('Файл не найден')
    //     } else {
    //         console.log(xhr.responseText)
    //     }
    // })
  }
  document.body.classList.add('body__overlay')
  overlay.open()
  overlay.setContent('Тест123')
})

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
      valid = false;
  }

  if (!validateField(form.elements.phone)) {
      valid = false;
  }

  if (!validateField(form.elements.street)) {
      valid = false;
  }

  if (!validateField(form.elements.home)) {
    valid = false;
}

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity()
}

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