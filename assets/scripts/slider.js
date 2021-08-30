class Slider {
    constructor(selector) {

      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {

        if (el.querySelectorAll('img').length > 1) {
          const slider = document.createElement('div');
          slider.classList.add('slider');
  
          const sliderImages = document.createElement('div');
          sliderImages.classList.add('slider__images');
          slider.appendChild(sliderImages);
  
          const sliderSectors = document.createElement('div');
          sliderSectors.classList.add('slider__images__sectors');
          sliderImages.appendChild(sliderSectors);
  
          const sliderDots = document.createElement('div');
          sliderDots.classList.add('slider__dots');
          sliderImages.appendChild(sliderDots);
  
          el.parentNode.insertBefore(slider, el);
          sliderImages.prepend(el);
        
          const sliderImagesArray = slider.querySelectorAll('img');
          sliderImagesArray.forEach(() => {
            sliderSectors.insertAdjacentHTML('afterbegin', '<div class="slider__images__sectors__sector"></div>');
            sliderDots.insertAdjacentHTML('afterbegin', '<div class="slider__dots__dot"></div>');
          });

          sliderDots.firstChild.classList.add('slider__dots__dot-active');

          const setActiveEl = function (targetEl) {
            const index = [...sliderSectors.children].indexOf(targetEl);
            sliderImagesArray.forEach((img, idx) => {
              if (index == idx) {
                img.style.display = 'block';
              } else {
                img.style.display = 'none';
              }
            });

            slider.querySelectorAll('.slider__dots__dot').forEach((dot, idx) => {
              if (index == idx) {
                dot.classList.add('slider__dots__dot-active');
              } else {
                dot.classList.remove('slider__dots__dot-active');
              }
            });
          };

          sliderSectors.addEventListener('mouseover', function (e) {
            if (e.target.matches('.slider__images__sectors__sector')) {
              setActiveEl(e.target);
            }
          });

        }
      });
    }
  }
  
  new Slider('.images');