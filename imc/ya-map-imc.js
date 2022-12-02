var schools = [
    {
      name:'МАОУ «Средняя школа № 1»',
      address:'ул. Пограничная, 18/1',
      number:'1',
      sportAreas:'футбольное поле/Баскетбольная площадка',
      sportInv:'баскетбольные кольца, футбольные ворота, уличные тренажеры, яма для прыжков в длину, полоса препятствий',
      buzy:'',
      workTime:'пн, ср, пт с 16:00-19:00 до 18:00<br/>сб-вс 14:00-19:00',
      coords:[53.0339319,158.6681443],
      images:['sites/default/files/sport_fields/1_1.webp', 'sites/default/files/sport_fields/1_2.webp', 'sites/default/files/sport_fields/1_3.webp'],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Средняя школа № 12»',
      address:'ул. Капитана Драбкина, 7',
      number:'12',
      sportAreas:'беговая дорожка, футбольное поле, площадка для стритбола',
      sportInv:'',
      buzy:'пн-пт 17:30 - 20:00, сб-вс 10:00 - 20:00',
      workTime:'пн-пт 08:00 - 17:20',
      coords:[52.9888905,158.6689818],
      images: ['sites/default/files/2022-12/12_1.jpg', 'sites/default/files/2022-12/12_2.jpg'],
      icon:'sites/default/files/sport_fields/football.png',
      iconSize: [16,16]
    },
    {
      name:'МАОУ «Средняя школа № 17»',
      address:'ул. Петра Ильичева, 80',
      number:'17',
      sportAreas:'футбольное поле, баскетбольная площадка, волейбольная площадка, беговая дорожка, городок для младших школьников',
      sportInv:'весь спортивный комплекс оборудован специальным спортивным инвентарем',
      buzy:'вс 10:00 - 20:00',
      workTime:'пн-пт 08:30 - 15:45, сб 10:00 - 15:00',
      coords:[52.9581959,158.6729240],
      images: ['sites/default/files/sport_fields/17_1.webp', 'sites/default/files/sport_fields/17_2.webp', 'sites/default/files/sport_fields/17_3.webp',
               'sites/default/files/sport_fields/17_4.webp', 'sites/default/files/sport_fields/17_5.webp', 'sites/default/files/2022-12/17_6.jpg',
               'sites/default/files/2022-12/17_7.jpg', 'sites/default/files/2022-12/17_8.jpg', 'sites/default/files/2022-12/17_9.jpg',
               'sites/default/files/2022-12/17_10.jpgp'],
      icon:'sites/default/files/sport_fields/football_basketball_volleyball.png',
      iconSize: [48,16]
    },
    {
      name:'МАОУ «Средняя школа № 20»',
      address:'ул. Бийская, 2',
      number:'20',
      sportAreas:'футбольное поле, баскетбольная площадка, беговая дорожка, прыжковая яма',
      sportInv:'уличные тренажеры',
      buzy:'пн-пт 15:00 - 20:00',
      workTime:'пн-пт 09:00 - 15:00',
      coords:[53.0661872,158.5877440],
      images: ['sites/default/files/2022-12/20_1.JPG', 'sites/default/files/2022-12/20_2.JPG', 'sites/default/files/2022-12/20_3.jpg'],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Средняя школа № 24»',
      address:'ул. Пономарева, 13',
      number:'24',
      sportAreas:'футбольное поле, баскетбольная площадка',
      sportInv:'уличные тренажеры',
      buzy:'пн-пт 16:00 - 21:00, сб-вс 09:00 - 21:00',
      workTime:'пн-пт 09:00 - 16:00',
      coords:[52.9850273,158.6806598],
      images: ['sites/default/files/sport_fields/24_1.webp', 'sites/default/files/sport_fields/24_2.webp', 'sites/default/files/sport_fields/24_3.webp',
              'sites/default/files/sport_fields/24_4.webp', 'sites/default/files/sport_fields/24_5.webp'],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Средняя школа № 28»',
      address:'ул. Кирдищева, 8',
      number:'28',
      sportAreas:'баскетбольная площадка',
      sportInv:'',
      buzy:'',
      workTime:'пн-пт 08:30 - 20:00',
      coords:[53.053691,158.673141],
      images: [],
      icon:'sites/default/files/sport_fields/basketball.png',
      iconSize: [16,16]
    },
    {
      name:'МАОУ «Средняя школа № 30»',
      address:'ул. Кроноцкая, 6/1',
      number:'30',
      sportAreas:'футбольное поле, баскетбольная площадка, беговая дорожка',
      sportInv:'',
      buzy:'',
      workTime:'пн-вс 09:00 - 20:00',
      coords:[53.0462515,158.6593808],
      images: ['sites/default/files/sport_fields/30_1.webp', 'sites/default/files/sport_fields/30_2.webp', 'sites/default/files/sport_fields/30_3.webp'],
      icon:'sites/default/files/sport_fields/football_hockey_volleyball_basketball.png',
      iconSize: [64,16]
    },
    {
      name:'МБОУ «Средняя школа № 32»',
      address:'ул. Дальняя, 42',
      number:'32',
      sportAreas:'баскетбольная площадка',
      sportInv:'',
      buzy:'',
      workTime:'пн-вс 09:00 - 20:00',
      coords:[53.058716,158.678160],
      images: [],
      icon:'sites/default/files/sport_fields/basketball.png',
      iconSize: [16,16]
    },
    {
      name:'МАОУ «Средняя школа № 36»',
      address:'пр. Победы, 6/1',
      number:'36',
      sportAreas:'футбольное поле',
      sportInv:'',
      buzy:'',
      workTime:'пн-пт 16:00 - 20:00, сб-вс 12:00 - 20:00',
      coords:[53.0721518,158.6107755],
      images: [],
      icon:'sites/default/files/sport_fields/football.png',
      iconSize: [16,16]
    },
    {
      name:'МБОУ «Средняя школа № 37»',
      address:'пер. Светлый, 1',
      number:'37',
      sportAreas:'футбольное поле, баскетбольная площадка',
      sportInv:'',
      buzy:'',
      workTime:'пн-вс 09:00 - 20:00',
      coords:[53.063852, 158.540399],
      images: [],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Гимназия № 39»',
      address:'ул. Космический проезд, 14',
      number:'39',
      sportAreas:'футбольное поле, баскетбольная площадка',
      sportInv:'',
      buzy:'',
      workTime:'пн-пт 16:00 - 19:00, сб-вс 10:00 - 19:00',
      coords:[53.0580747,158.6636040],
      images: [],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МБОУ «Средняя школа № 41»',
      address:'ул. Первомайская, 15А',
      number:'41',
      sportAreas:'футбольное поле, баскетбольная площадка',
      sportInv:'',
      buzy:'',
      workTime:'пн-вс 19:00 - 19:00',
      coords:[53.034027, 158.744900],
      images: [],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Средняя школа № 42»',
      address:'ул. Савченко, 12',
      number:'42',
      sportAreas:'футбольное поле, хоккейная коробка, площадка для стритбола',
      sportInv:'',
      buzy:'',
      workTime:'пн-пт 18:00 - 20:00, сб 15:00 - 20:00, вс 09:00 - 20:00',
      coords:[53.0763281,158.6462756],
      images: ['sites/default/files/sport_fields/42_1.webp', 'sites/default/files/sport_fields/42_2.webp', 'sites/default/files/sport_fields/42_3.webp',
              'sites/default/files/sport_fields/42_4.webp', 'sites/default/files/sport_fields/42_5.webp'],
      icon:'sites/default/files/sport_fields/football_hockey.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Средняя школа № 43»',
      address:'ул. Ватутина, 1Б',
      number:'43',
      sportAreas:'футбольное поле, хоккейная коробка, площадка для стритбола',
      sportInv:'',
      buzy:'',
      workTime:'пн-вс 16:00 - 19:00',
      coords:[53.0535739,158.6323787],
      images: [],
      icon:'sites/default/files/sport_fields/football_basketball.png',
      iconSize: [32,16]
    },
    {
      name:'МАОУ «Средняя школа № 45»',
      address:'ул. Якорная, 11',
      number:'45',
      sportAreas:'футбольное поле, хоккейная коробка, площадка для стритбола',
      sportInv:'',
      buzy:'',
      workTime:'пн-пт 17:30 - 20:00, сб 17:00 - 22:00, вс 10:00 - 22:00',
      coords:[53.0612827,158.5961176],
      images: [],
      icon:'sites/default/files/sport_fields/football.png',
      iconSize: [16,16]
    }
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
          //menuMobileItem = $(`<option class="mobile-menu-item">${school.name}, ${school.address}</option>`),
          descriptionBalloon = `<span style="font-size:14px;">${school.name}<br/>${school.address}</span><br/>
                                <img src="${school.icon}" style="width:${school.iconSize[0]}px;height:${school.iconSize[1]}px"><br/>
                                <span>График свободного доступа для населения:</span><br/>
                                <span><b>${school.buzy}</b></span><br/><br/>
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
        createMobileMenu(school, placemark);
      //menuMobileItem.appendTo(menuMobile);
      //menuMobile.appendTo($('#menu-map'));
      /*menuMobile.change(function() {
        showDesc(school);
        if (placemark.balloon.isOpen()) {
          placemark.balloon.close();
        } else {
          placemark.balloon.open();
        }
      });*/
      myMap.geoObjects.add(collection);
    }
      
    function createMobileMenu(school, placemark) {
      var menuMobileItem = $(`<option class="mobile-menu-item" value="${school.number}">${school.name}, ${school.address}</option>`);
      menuMobileItem.appendTo(menuMobile);
      menuMobile.appendTo($('#menu-map'));
      menuMobile.change(function() {
        var selected = $('#menu-map__list-mobile').children(':selected').val(),
            fullTitle = schools.find(school => school.number === selected).name + ', ' + schools.find(school => school.number === selected).address;
        console.log($(this).text());
        console.log(fullTitle);
        if ($(this).text() !== fullTitle) return;
        showDesc(school);
        if (placemark.balloon.isOpen()) {
          placemark.balloon.close();
        } else {
          placemark.balloon.open();
        }
      })
    }

    function showDesc(school) {
      var control = myMap.controls.get('routeButtonControl'),
          userLocation = control.routePanel.geolocate('from'),
          description = $(`<span style="font-size:24px;">${school.name}, ${school.address}</span><br/>
                        <span>Спортивные площадки: <b>${school.sportAreas}</b></span><br/>
                        <span>Спортивное оборудование: <b>${school.sportInv}</b></span><br/>
                        <span>График работы: <b>${school.workTime}</b></span><br/>
                        <span>График свободного доступа для населения: <b>${school.buzy}</b></span><br/>`);
      document.getElementsByClassName('school-desc__text')[0].replaceChildren();
      description.appendTo($(".school-desc__text"))
      document.getElementsByClassName('images')[0].replaceChildren();
      if (school.images.length > 0) {
        school.images.forEach(image => {
          var img = $(`<li><img src="${image}"></li>`);
          img.appendTo($(".images"));
        });
        $('#gallery').css('border', '2px solid #005c9d');
        viewer.update();
      } else {
        $('#gallery').css('border', 'none');
      }
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
