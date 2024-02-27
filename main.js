const swiper = new Swiper('.swiper', {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const buttons = document.querySelectorAll('.c-button');
const checkboxes = document.querySelectorAll('.swiper-slide__checkbox');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    checkboxes.forEach(checkbox => {
      const textElement = checkbox.nextElementSibling;
      if (checkbox.checked) {
        textElement.classList.add('active');
       } 
    })
  })
});
