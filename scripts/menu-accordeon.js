const menuItems = document.querySelectorAll('.menu-accordeon__title')
menuItems.forEach(item => {
  $(item).on('click', event => {
    event.preventDefault()
    const menuItem = item.parentElement
    if ($(menuItem).hasClass('menu-active')) {
      $(menuItem).removeClass('menu-active')
    } else {
      const openedMenuElement = document.querySelector('.menu-active')
      if (openedMenuElement && !menuItem.isEqualNode(openedMenuElement)) {
        $(openedMenuElement).removeClass('menu-active')
      }
      $(menuItem).addClass('menu-active')
    }
  })
})