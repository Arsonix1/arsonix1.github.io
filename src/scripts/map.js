(function() {
  let myMap
  const init = () => {
    myMap = new ymaps.Map('map', {
      center: [59.935274, 30.312388],
      zoom: 12,
      controls: []
    })
    const coords = [
      [59.974387, 30.314169],
      [59.946088, 30.384338],
      [59.889532, 30.314497],
      [59.927183, 30.484142]
    ]
    const mapMarker = ymaps.templateLayoutFactory.createClass(
      '<svg class="contacts__map-marker">'+
        '<use xlink:href="img/svg/sprite.svg#map-marker" />'+
      '</svg>'
    )
    const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: mapMarker,
      iconImageHref: './img/svg/map-marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    })
    coords.forEach(coord => {
      myCollection.add(new ymaps.Placemark(coord))
    })
    myMap.geoObjects.add(myCollection)
    myMap.behaviors.disable('scrollZoom')
  }
  
  ymaps.ready(init)
}) ()