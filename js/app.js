// Работа со слайдами с использованием библиотек
document.querySelectorAll('.slider').forEach((n, i) => {
  window[`slider${i+1}`] = new Swiper(n, {
  freeMode: true,
  centeredSlider: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  //slidesOffsetBefore: -125,
  })
})
bindSwipers(slider1, slider2, slider3, slider4);

// Работа с меню-бургер
document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (targetElement.closest('[data-goto]')) {
    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop - (headerHeight + 15),
        behavior: 'smooth',
      });
    }
    e.preventDefault();
  }
}
