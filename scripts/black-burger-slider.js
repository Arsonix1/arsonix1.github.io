const left = $('.wrapper').find('#left')
const right = $('.wrapper').find('#right')
const slider = $('.wrapper').find('#slider')
const slidesCount = document.getElementById('slider').children.length
const maxSlidesWidth = 1900*(slidesCount-1)

$(right).on('click', event => {
  event.preventDefault()
  let currentRight = parseInt(slider.css('right'))
  if (!currentRight) {
    currentRight = 0
  }
  if (currentRight < maxSlidesWidth) {
    slider.css('right', currentRight + 1900)
  }
  if (currentRight === maxSlidesWidth) {
    slider.css('right', 0)
  }
})

$(left).on('click', event => {
  event.preventDefault()
  let currentRight = parseInt(slider.css('right'))
  if (!currentRight) {
    currentRight = 0
  }
  if (currentRight === 0) {
    slider.css('right', maxSlidesWidth)
  }
  if (currentRight === maxSlidesWidth) {
    slider.css('right', 0)
  }
})