const menuItems = document.querySelectorAll('.menu-accordeon__title')
menuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    const menuItem = item.parentElement
    if (menuItem.classList.contains('active')) {
      menuItem.classList.remove('active')
    } else {
      const openedMenuElement = document.querySelector('.active')
      if (openedMenuElement && !menuItem.isEqualNode(openedMenuElement)) {
        openedMenuElement.classList.remove('active') 
      }
      menuItem.classList.add('active')
    }
  })
})