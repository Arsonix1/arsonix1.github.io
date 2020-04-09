(function() {
  const sections = $('.landing-block')
  const display = $('.maincontent')
  let inScroll = false
  const mobileDetect = new MobileDetect(window.navigator.userAgent)
  const isMobile = mobileDetect.mobile()
  
  const scrolling = sectionEq => {
    if (!inScroll) {
      inScroll = true
      const position = sectionEq * -100
      sections.eq(sectionEq).addClass('active').siblings().removeClass('active')
      display.css({
        transform: `translateY(${position}%)`
      })
      display.on('transitionend', function() {
        $('.fixed-menu__item').eq(sectionEq).addClass('active').siblings().removeClass('active')
        inScroll = false
      })
    }
  }
  
  const scrollToSection = direction => {
    const activeSection = sections.filter('.active')
    const nextSection = activeSection.next()
    const prevSection = activeSection.prev()
    if (nextSection.length && direction === 'next') {
      scrolling(nextSection.index())
    }
    if (prevSection.length && direction === 'prev') {
      scrolling(prevSection.index())
    }
  }
  
  $(window).on('wheel', event => {
    const deltaY = event.originalEvent.deltaY
    if (deltaY > 0) {
      scrollToSection('next')
    }
    if (deltaY < 0) {
      scrollToSection('prev')
    }
  })
  
  $(document).on('keydown', event => {
    const tagName = event.target.tagName.toLowerCase()
    if (tagName !== 'input' && tagName !== 'textarea') {
      switch(event.keyCode) {
        case 38:
          scrollToSection('prev')
          break
        case 40:
          scrollToSection('next')
          break
      }
    }
  })
  
  $('[data-scroll-to]').on('click', event => {
    event.preventDefault()
    const $this = $(event.currentTarget)
    const target = $this.attr('data-scroll-to')
    scrolling(target)
  })
  
  if (isMobile) {
    $('body').swipe({
      swipe: (event, direction) => {
        let scrollDirecion
        if (direction === 'up') {
          scrollDirecion = 'next'
        }
        if (direction === 'down') {
          scrollDirecion = 'prev'
        }
        scrollToSection(scrollDirecion)
      }
    })
  }
}) ()