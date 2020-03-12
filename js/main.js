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
      // let target = event.target;
      if((event.target).closest('.modal__dialog'))
      event.stopPropagation();
      else if((event.target).closest('.modal'))
      modal.classList.remove('modal--visible');
    })

    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 27)
      modal.classList.remove('modal--visible');
    })
  
    // modal.addEventListener('click', (event) => {

    //   event.stopPropagation();
    //   modal.classList.remove('modal--visible');
    // });

    // modalDialog.addEventListener('click', (event) => {

    //   event.stopPropagation();
    //   modal.classList.remove('modal--visible');
    // });

    // document.addEventListener('click', (event) => {
    // if (!(event.target).closest('.modal').length && !(event.target).is('.modal')) {
    // switchModal() }});
    
});