const teamItems = document.querySelectorAll('.team-accordeon__name')
teamItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    const teamItem = item.parentElement
    if (teamItem.classList.contains('active')) {
      teamItem.classList.remove('active')
    } else {
      const openedMenuElement = document.querySelector('.active')
      if (openedMenuElement && !teamItem.isEqualNode(openedMenuElement)) {
        openedMenuElement.classList.remove('active') 
      }
      teamItem.classList.add('active')
    }
  })
})