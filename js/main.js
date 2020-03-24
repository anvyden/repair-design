
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      thanks = $('.thanks')
      closeBtnThanks = $('.thanks__close')

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  modal.on('click', function (event) {
    if ($(event.target).is('modal__dialog'))
    event.stopPropagation();
    else if ($(event.target).is('.modal'))
    modal.toggleClass('modal--visible');
  });
  $(document).on('keydown', function(event) {
    if (event.keyCode === 27 && $('.modal').hasClass('modal--visible'))
    modal.toggleClass('modal--visible');
  });
  // Закрытие окна благодарности
  closeBtnThanks.on('click', function() {
    thanks.removeClass('thanks--visible');
  });
  thanks.on('click', function (event) {
    if ($(event.target).is('thanks__dialog'))
    event.stopPropagation();
    else if ($(event.target).is('.thanks'))
    thanks.removeClass('thanks--visible');
  });
  $(document).on('keydown', function(event) {
    if (event.keyCode === 27 && $('.thanks').hasClass('thanks--visible'))
    thanks.removeClass('thanks--visible');
  });
  
  $(document).scroll(function() {
    if ($(this).scrollTop() >= 30 && $(window).width() >= 760) {
      if($('.button-up').is(':hidden')) {
        $('.button-up').css({opacity : 1}).fadeIn('slow');
      }
    } else { $('.button-up').stop(true, false).fadeOut('fast'); }
  });
  $('.button-up').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 1300);
  });

  $('.nav').on('click', 'a', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        idTop = $(id).offset().top;
      $('body, html').animate({scrollTop: idTop}, 1300);
  });
  $('.logo').on('click', 'a', function(e) {
      $('body, html').animate({scrollTop: 0}, 1300);
  });

  var mySwiper = new Swiper ('.projects-swiper', {
    loop: true,
    pagination: {
      el: '.projects-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects-swiper-button-next',
      prevEl: '.projects-swiper-button-prev',
    },
  });
    

  var next = $('.projects-swiper-button-next');
  var prev = $('.projects-swiper-button-prev');
  var bullets = $('.projects-pagination');

  var mql = window.matchMedia('all and (max-width: 570px)');
    if (mql.matches) {
      $('.swiper-slide__img').each(function () {
        $(this).attr('src', 'img/project/project-mobile.jpg');
        });
    } else {
      $('.swiper-slide__img').each(function () {
        $(this).attr('src', 'img/project/project.jpg');
        });
    }


    var positionPrev = prev.position();

    bullets.css('left', positionPrev.left + prev.width() + 20)
    next.css('left', positionPrev.left + prev.width() + 20 + bullets.width() + 20)
   
    new WOW().init();


    // Валидация формы
    $('.modal__form').validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // строчное правило
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 17
        },
        // правило-объект (блок)
        userEmail: {
          required: true,
          email: true
        },
        policyCheckbox: "required",
      }, // сообщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не должно быть короче двух букв",
          maxlength: "Имя не должно быть больше 15 букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Номер не может быть короче 11 цифр"
        },
        userEmail: {
          required: "Заполните поле",
          email: "Введите в формате: name@domain.com"
        },
        policyCheckbox: "Обязательное поле"
      },

      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $('.thanks').addClass('thanks--visible');
            $(form)[0].reset();
            if ($('.thanks').hasClass('thanks--visible')) {
              modal.removeClass('modal--visible');
            }
          }
        });
      },
    });
    $('.footer__form').validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // строчное правило
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 17
        },
        // правило-объект (блок)
        userQuestion: {
          required: true
        },
        policyCheckbox: "required",
      }, // сообщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не должно быть короче двух букв",
          maxlength: "Имя не должно быть больше 15 букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Номер не может быть короче 11 цифр"
        },
        userQuestion: {
          required: "Заполните поле"
        },
        policyCheckbox: "Обязательное поле"
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $('.thanks').addClass('thanks--visible');
            $(form)[0].reset();
            if ($('.thanks').hasClass('thanks--visible')) {
              modal.removeClass('modal--visible');
            }
          }
        });
      },
    });
    $('.control__form').validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // строчное правило
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 17
        },
        policyCheckbox: "required",
      }, // сообщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не должно быть короче двух букв",
          maxlength: "Имя не должно быть больше 15 букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Номер не может быть короче 11 цифр"
        },
        policyCheckbox: "Обязательное поле",
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $('.thanks').addClass('thanks--visible');
            $(form)[0].reset();
            if ($('.thanks').hasClass('thanks--visible')) {
              modal.removeClass('modal--visible');
            }
          }
        });
      },
    });

    // маска для номера телефона

    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

    // yandex карта
    // var spinner = $('.ymap-container').children('.loader');
    // var check_if_load = false;
    // var myMap, myPlacemark;

    // создание yandex карты
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [47.244729, 39.723187],
              zoom: 13
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; width: 100%; height: 100%; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Наш офис',
              balloonContent: 'Турецкий ремонт квартир'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/location.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });

      myMap.behaviors.disable('scrollZoom')
      myMap.geoObjects.add(myPlacemark)
  });
    let map_container = document.getElementById('map');
    let options_map = {
        once: true, //once start, thereafter destroy listener
        passive: true,
        capture: true
    };
    map_container.addEventListener('click', start_lazy_map, options_map);
    map_container.addEventListener('mouseover', start_lazy_map, options_map);
    map_container.addEventListener('touchstart', start_lazy_map, options_map);
    map_container.addEventListener('touchmove', start_lazy_map, options_map);
    let map_loaded = false;
    function start_lazy_map() {
        if (!map_loaded) {
            let map_block = document.getElementById('ymap_lazy');
            map_loaded = true;
            map_block.setAttribute('src', map_block.getAttribute('data-src'));
            map_block.removeAttribute('data_src');
            console.log('YMAP LOADED');
        }
    }

  // var layer = myMap.layers.get(0).get(0);
  // waitForTilesLoad(layer).then(function() {
  //   spinner.removeClass('is-active');
  // });
  // function waitForTilesLoad(layer) {
  //   return new ymaps.vow.Promise(function (resolve, reject) {
  //     var tc = getTileContainer(layer), readyAll = true;
  //     tc.tiles.each(function (tile, number) {
  //       if (!tile.isReady()) {
  //         readyAll = false;
  //       }
  //     });
  //     if (readyAll) {
  //       resolve();
  //     } else {
  //       tc.events.once("ready", function() {
  //         resolve();
  //       });
  //     }
  //   });
  // }
  // function getTileContainer(layer) {
  //   for (var k in layer) {
  //     if (layer.hasOwnProperty(k)) {
  //       if (
  //         layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
  //         || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
  //       ) {
  //         return layer[k];
  //       }
  //     }
  //   }
  //   return null;
  // }
  // // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  // function loadScript(url, callback){
  //   var script = document.createElement("script");
  
  //   if (script.readyState){  // IE
  //     script.onreadystatechange = function(){
  //       if (script.readyState == "loaded" ||
  //               script.readyState == "complete"){
  //         script.onreadystatechange = null;
  //         callback();
  //       }
  //     };
  //   } else {  // Другие браузеры
  //     script.onload = function(){
  //       callback();
  //     };
  //   }
  
  //   script.src = url;
  //   document.getElementsByTagName("head")[0].appendChild(script);
  // }
  // // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  // var ymap = function() {
  //   $('.ymap-container').mouseenter(function(){
  //       if (check_if_load == 0) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
  
  //       // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
  //         check_if_load = 1; 
  
  //     // Показываем индикатор загрузки до тех пор, пока карта не загрузится
  //         spinner.addClass('is-active');
  
  //     // Загружаем API Яндекс.Карт
  //         loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
  //           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
  //           ymaps.load(init);
  //         });                
  //       }
  //     }
  //   );  
  // }
  
  // $(function() {
  
  //   //Запускаем основную функцию
  //   ymap();
  
  // });

});