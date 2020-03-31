const teamItems = document.querySelectorAll('.team-accordeon__name')
teamItems.forEach(item => {
  $(item).on('click', event => {
    event.preventDefault()
    const teamItem = item.parentElement
    if ($(teamItem).hasClass('team-active')) {
      $(teamItem).removeClass('team-active')
    } else {
      const openedTeamElement = document.querySelector('.team-active')
      if (openedTeamElement && !teamItem.isEqualNode(openedTeamElement)) {
        $(openedTeamElement).removeClass('team-active')
      }
      $(teamItem).addClass('team-active')
    }
  })
})