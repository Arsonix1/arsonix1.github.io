(function() {
  const hamburger = $('.wrapper').find('.hamburger__icon-link')
  const nav = $('.wrapper').find('.navigation')
  const hamburgerClose = $('.wrapper').find('.hamburger__close')

  hamburger.on('click', event => {
    event.preventDefault()
    nav.addClass('navigation_hamburger-visible')
    $('body').addClass('body__overlay')
  })

  hamburgerClose.on('click', event => {
    event.preventDefault()
    nav.removeClass('navigation_hamburger-visible')
    $('body').removeClass('body__overlay')
  })
}) ()