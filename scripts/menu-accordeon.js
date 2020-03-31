const menuItems = $('.wrapper').find('.menu-accordeon__title')
$(menuItems).each((ndx, item) => {
  $(item).on('click', event => {
    event.preventDefault()
    const menuItem = $(item).parent()
    if ($(menuItem).hasClass('menu-active')) {
      $(menuItem).removeClass('menu-active')
    } else {
      const openedMenuElement = $(menuItem).siblings('.menu-active')
      if (openedMenuElement && menuItem !== openedMenuElement) {
        $(openedMenuElement).removeClass('menu-active')
      }
      $(menuItem).addClass('menu-active')
    }
  })
})