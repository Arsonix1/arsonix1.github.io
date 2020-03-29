const left = document.querySelector('#left')
const right = document.querySelector('#right')
const slider = document.querySelector('#slider')
const computed = getComputedStyle(slider)
const slidesCount = document.getElementById('slider').children.length
const maxSlidesWidth = 1900*(slidesCount-1)

right.addEventListener('click', (event) => {
  event.preventDefault()
  let currentRight = parseInt(computed.right)
  if (!currentRight) {
    currentRight = 0
  }
  if (currentRight < maxSlidesWidth) {
    slider.style.right = currentRight + 1900 + 'px'
  }
  if (currentRight === maxSlidesWidth) {
    slider.style.right = 0
  }
})

left.addEventListener('click', (event) => {
  event.preventDefault()
  let currentRight = parseInt(computed.right)
  if (!currentRight) {
    currentRight = 0
  }
  if (currentRight === 0) {
    slider.style.right = maxSlidesWidth + 'px'
  }
  if (currentRight === maxSlidesWidth) {
    slider.style.right = 0
  }
})