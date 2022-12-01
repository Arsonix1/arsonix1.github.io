var schools = [
    {
      name:'МАОУ «Средняя школа № 1»',
      address:'ул. Пограничная, 18/1',
      number:'1',
      sportAreas:'Футбольное поле/Баскетбольная площадка',
      sportInv:'уличные тренажеры, яма для прыжков в длину, полоса препятствий',
      buzy:'',
      workTime:'пн-пт с 08:15 до 18:00',
      coords:[53.0339319,158.6681443],
      images:['sites/default/files/sport_fields/1_1.webp', 'sites/default/files/sport_fields/1_2.webp', 'sites/default/files/sport_fields/1_3.webp'],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Средняя школа № 3»',
      address:'ул. Зеленая Роща, 24',
      number:'3',
      sportAreas:'',
      sportInv:'',
      buzy:'',
      workTime:'',
      coords:[52.9711463,158.6889999],
      images: ['sites/default/files/sport_fields/3_1.webp', 'sites/default/files/sport_fields/3_2.webp'],
      icon:'sites/default/files/sport_fields/football_hockey.png',
      iconSize: [32,16]
    },
  ],
  iconColors = ['blue', 'red', 'darkOrange', 'night', 'darkBlue', 'pink', 'gray', 'brown'];
  ymaps.ready(init);

  function init() {
    var collection = new ymaps.GeoObjectCollection(null, { preset: 'islands#' + iconColors[Math.floor(Math.random() * iconColors.length)] + 'Icon' });
    const gallery = document.getElementById("gallery");
    const viewer = new Viewer(gallery, {
      title: false,
      toolbar: {
        oneToOne: false,
        prev() {
          viewer.prev(true);
        },
        play: false,
        next() {
          viewer.next(true);
        }
      }
    });
    var geolocation = ymaps.geolocation,
      myMap = new ymaps.Map('ya-map', {
        center: [53, 158.67],
        zoom: 12,
        controls: ['geolocationControl', 'routeButtonControl']
      }, {
        searchControlProvider: 'yandex#search'
      }),
      menu = $('<div class="menu-map__list"></div>'),
      menuMobile = $('<select id="menu-map__list-mobile"></select>');
    for (var i = 0; i < schools.length; i++) {
      createMenu(schools[i]);
    }

    function createMenu (school) {
      var menuItem = $(`<div class="menu-map__item-wrapper"><p class="menu-map__item">${school.name}, ${school.address}</p></div>`),
          menuMobileItem = $(`<option class="mobile-menu-item">${school.name}, ${school.address}</option>`),
          descriptionBalloon = `<span style="font-size:14px;">${school.name}<br/>${school.address}</span><br/>
                                <span>Время пользования населением:</span><br/>
                                <span><b>${school.buzy}</b></span><br/>
                                <img src="${school.icon}" style="width:${school.iconSize[0]};height:${school.iconSize[1]}"><br/><br/>
                                <span class="map-balloon" number="${school.number}">Построить маршрут</span><br/>`,
          placemark = new ymaps.Placemark(
            school.coords,
            { balloonContent: descriptionBalloon },
            {
              iconLayout: 'default#image',
              iconImageHref: school.icon,
              iconImageSize: school.iconSize
            }
          );
      placemark.events.add('balloonopen', function(e) {
        showDesc(school);
      });
      collection.add(placemark);
      menuItem
        .appendTo(menu)
        .find('p')
        .bind('click', function () {
          if (placemark.balloon.isOpen()) {
            placemark.balloon.close();
          } else {
            placemark.balloon.open();
            showDesc(school);
          } 
          return false;
      });
      menu.appendTo($('#menu-map'));
      menuMobileItem.appendTo(menuMobile);
      menuMobile.appendTo($('#menu-map'));
      menuMobile.change(function() {
        showDesc(school);
        if (placemark.balloon.isOpen()) {
          placemark.balloon.close();
        } else {
          placemark.balloon.open();
        }
      });
      myMap.geoObjects.add(collection);
    }

    function showDesc(school) {
      var control = myMap.controls.get('routeButtonControl'),
          userLocation = control.routePanel.geolocate('from'),
          description = $(`<span style="font-size:24px;">${school.name}, ${school.address}</span><br/>
                        <span>Спортивные площадки: <b>${school.sportAreas}</b></span><br/>
                        <span>Спортивное оборудование: <b>${school.sportInv}</b></span><br/>
                        <span>График работы: <b>${school.workTime}</b></span><br/>
                        <span>Время пользования населением: <b>${school.buzy}</b></span><br/>`);
      document.getElementsByClassName('school-desc__text')[0].replaceChildren();
      description.appendTo($(".school-desc__text"))
      document.getElementsByClassName('images')[0].replaceChildren();
      school.images.forEach(image => {
        var img = $(`<li><img src="${image}"></li>`);
        img.appendTo($(".images"));
      });
      $('#gallery').css('border', '2px solid #005c9d');
      viewer.update();
      if (document.getElementsByClassName('map-balloon')[0]) {
        document.getElementsByClassName('map-balloon')[0].addEventListener('click', event => {
          var toLocation = schools.find(school => school.number === event.target.attributes[1].value).coords;
          control.routePanel.state.set({
            type: 'auto',
            from: userLocation,
            to: toLocation
          });
          control.routePanel.getRouteAsync();
          control.state.set('expanded', true);
        })
      }
    }
    myMap.setBounds(myMap.geoObjects.getBounds());
    document.getElementsByClassName('ymaps-2-1-79-events-pane ymaps-2-1-79-user-selection-none')[0].addEventListener('click', event => {
      viewer.update();
    })
  }
