(function() {
  $(function () {
    var generateDots = function() {
      $('.slider__item').each(function() {
        var dot = $('<li>', {
          attr: {
            class: 'slider__dots-item'
          },
          html: '<div class="slider__dots-circle"></div>'
        })
        $('.slider__dots').append(dot)
      })
    }
  
    generateDots()
  
    var paintDot = function(index) {
      $('.slider').find('.slider__dots-item').eq(index).addClass('active').siblings().removeClass('active')
    }
  
    paintDot(0)
  
    var moveSlide = function(container, slideNum) {
      var items = container.find('.slider__item'),
        activeSlide = items.filter('.active'),
        reqItem = items.eq(slideNum),
        reqIndex = reqItem.index(),
        list = container.find('.slider__list'),
        duration = 500
      
      if (reqItem.length) {
        list.animate({
          'left': -reqIndex * 100 + '%'
        }, duration, function() {
          activeSlide.removeClass('active')
          reqItem.addClass('active')
          paintDot(slideNum)
        })
      }
    }
    $('.arrow__burgers-slider').on('click', function(event) {
      event.preventDefault()
      var $this = $(this),
        container = $this.closest('.slider'),
        items = container.find('.slider__item'),
        activeItem = items.filter('.active'),
        existedItem,
        edgeItem,
        reqItem
      
      if ($this.hasClass('right')) {
        existedItem = activeItem.next()
        edgeItem = items.first()
      } 
      
      if ($this.hasClass('left')) {
        existedItem = activeItem.prev()
        edgeItem = items.last()
      }
  
      reqItem = existedItem.length ? existedItem.index() : edgeItem.index()
      moveSlide(container, reqItem)
    })
  
    $('body').on('click', '.slider__dots-item', function() {
      var $this = $(this),
        container = $this.closest('.slider'),
        index = $this.index()
      
      moveSlide(container, index)
      paintDot(index)
    })
  })
}) ()