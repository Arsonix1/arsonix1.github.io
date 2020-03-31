const teamItems = $('.wrapper').find('.team-accordeon__name')
teamItems.each((ndx, item) => {
  $(item).on('click', event => {
    event.preventDefault()
    const teamItem = $(item).parent()
    if (teamItem.hasClass('team-active')) {
      teamItem.removeClass('team-active')
    } else {
      const openedTeamElement = teamItem.siblings('.team-active')
      if (openedTeamElement && teamItem !== openedTeamElement) {
        openedTeamElement.removeClass('team-active')
      }
      teamItem.addClass('team-active')
    }
  })
})