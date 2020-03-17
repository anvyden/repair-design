/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const modalDialog = document.querySelector('.modal__dialog');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
    });

  closeBtn.addEventListener('click', switchModal);

  modal.addEventListener('click', (event) => {
    if((event.target).closest('.modal__dialog'))
    event.stopPropagation();
    else if((event.target).closest('.modal'))
    modal.classList.remove('modal--visible');
  })

  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27)
    modal.classList.remove('modal--visible');
  })
  
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

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
  
  $(document).scroll(function() {
    if ($(this).scrollTop() > 30 && $(window).width() >= 760) {
      if($('.button-up').is(':hidden')) {
        $('.button-up').css({opacity : 1}).fadeIn('slow');
      }
    } else { $('.button-up').stop(true, false).fadeOut('fast'); }
  });
  $('.button-up').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 700);
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // $(window).resize(function() {
  //   if ($(window).width() <= 760) {
  //     $('.col-60').removeClass('.col-60--top');
  //   };
  // });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  var bullet = $('.swiper-pagination.bullet')

  // next.css('left', prev.width() + 20 + bullets.width() + 20)
  // bullets.css('left', prev.css('left') + prev.width() + 20)
  
  // Способ перемещения блока из другого блока при определенном разрешении
  // $(window).resize(function () {
  //   if($(window).width() <= 760) {
  //     $('.swiper-container-mobile').detach().prependTo('.col-60-mobile');
  //   } else {
  //       $('.col-60').append($('.swiper-container-mobile'));
  //     }

  // });

  // $(window).resize(function () {
  //   if ($(window).width() <= 760) {
  //     // $('.projects__section-title').after($('.swiper-container-mobile')),
  //     $('.swiper-slide__img').each(function () {
  //       $(this).attr('src', 'img/project/project-mobile.jpg');
  //       });
  //     // $('.swiper-slide__img').attr.each('src', 'img/project/project-mobile.jpg');
  //   } else {
  //     // $('.col-60').append($('.swiper-container-mobile'));
  //     $('.swiper-slide__img').each(function () {
  //       $(this).attr('src', 'img/project/project.jpg');
  //       });
  //   }
  //   });

    var positionPrev = prev.position();

    bullets.css('left', positionPrev.left + prev.width() + 20)
    next.css('left', positionPrev.left + prev.width() + 20 + bullets.width() + 20)

    new WOW().init();

    // animation visibility

    var typesCard = $('.types__card');
    var typesHeight = $('.header').height() + $(".hero").height() + $('.projects').height()
      + $('.control').height() - 200;

    $(window).scroll(function() {
      if ($(this).scrollTop() >= typesHeight && $(window).width() >= 760)
      typesCard.addClass("animation-fade-up");
    });


});