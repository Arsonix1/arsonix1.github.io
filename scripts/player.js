(function() {
  const player = $('.wrapper').find('.player')
  const playerStart = $('.wrapper').find('.player__controls-play')
  const playerPause = $('.wrapper').find('.player__controls-pause')
  const video = $('.wrapper').find('.player__elem')
  const playerPlaybackBtn = $('.wrapper').find('.player__playback-btn')
  const playerPlayback = $('.wrapper').find('.player__playback')
  const playerVolBtn = $('.wrapper').find('.player__vol')
  const playerVolume = $('.wrapper').find('.player__volume')
  const playerVolumeBtn = $('.wrapper').find('.player__volume-btn')
  const playerSplash = $('.wrapper').find('.player__splash')

  playerStart.on('click', () => {
    video.trigger('play')
    player.removeClass('paused')
    player.addClass('active')
  })

  playerPause.on('click', () => {
    video.trigger('pause')
    player.addClass('paused')
    player.removeClass('active')
  })


  playerSplash.on('click', () => {
    video.trigger('play')
  })

  video.on('click', () => {
    if (!video.get(0).paused) {
      video.trigger('pause')
      player.addClass('paused')
      player.removeClass('active')
    } else {
      video.trigger('play')
      player.removeClass('paused')
      player.addClass('active')
    }
  })

  video.on('play', () => {
    player.addClass('active')
  })

  video.on('timeupdate', function () {
    const completedSec = video.get(0).currentTime
    const completedPercent = (completedSec / video.get(0).duration) * 100
    playerPlaybackBtn.css({
      left: `${completedPercent}%`
    })
  })

  video.on('ended', function () {
    video.get(0).currentTime = 0
    player.removeClass('active')
  })

  playerPlayback.on('click', (event) => {
    const bar = $(event.currentTarget)
    const newButtonPosition = event.pageX - bar.offset().left
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100
    const newPlayerTimeSec = (video.get(0).duration / 100) * buttonPosPercent
    playerPlaybackBtn.css({
      left: `${buttonPosPercent}%`
    })
    video.get(0).currentTime = newPlayerTimeSec
  })

  playerVolBtn.on('click', () => {
    video.get(0).volume = !video.get(0).volume
    const volPos = video.get(0).volume ? 100 : 0
    playerVolumeBtn.css({
      left: `${volPos}%`
    })
  })

  playerVolume.on('click', (event) => {
    const bar = $(event.currentTarget)
    const newButtonPosition = event.pageX - bar.offset().left
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100
    const newPlayerVolume = (1 / 100) * buttonPosPercent
    playerVolumeBtn.css({
      left: `${buttonPosPercent}%`
    })
    video.get(0).volume = newPlayerVolume
  })
}) ()