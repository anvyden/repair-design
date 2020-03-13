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
    if ($(this).scrollTop() > 30) {
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

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  var bullet = $('.swiper-pagination.bullet')

  next.css('left', prev.width() + 20 + bullets.width() + 20)
  bullets.css('left', prev.width() + 20)

});