const hamburger = document.querySelector('.hamburger__icon-link')
const nav = document.querySelector('.navigation')
const hamburgerClose = document.querySelector('.hamburger__close')

hamburger.addEventListener('click', (event) => {
  event.preventDefault()
  nav.classList.add('navigation_hamburger-visible')
  document.body.classList.add('body__overlay')
})

hamburgerClose.addEventListener('click', (event) => {
  event.preventDefault()
  nav.classList.remove('navigation_hamburger-visible') 
  document.body.classList.remove('body__overlay')
})