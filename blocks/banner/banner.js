export default function decorate(block) {
  const bannerItems = [...block.querySelectorAll('.banner > div')];
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-container');
  const slidesContainer = document.createElement('div');
  slidesContainer.classList.add('slides-container');
  const prevButton = createButton('prev', '');
  const nextButton = createButton('next', '');

  carouselContainer.appendChild(prevButton);
  carouselContainer.appendChild(slidesContainer);
  carouselContainer.appendChild(nextButton);
  block.appendChild(carouselContainer);

  let slideIndex = 0;

  function createButton(className, textContent) {
    const button = document.createElement('button');
    button.classList.add(className);
    button.textContent = textContent;
    button.addEventListener('click', () => {
      if (className === 'prev') {
        showSlides(--slideIndex);
      } else {
        showSlides(++slideIndex);
      }
    });
    return button;
  }

  function showSlides(index) {
    if (index >= bannerItems.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = bannerItems.length - 1;
    }

    bannerItems.forEach(item => {
      item.style.display = 'none';
    });

    bannerItems[slideIndex].style.display = 'block';
  }

  function lazyLoadImages() {
    bannerItems.forEach(item => {
      const img = item.querySelector('img');
      if (img && !img.complete) {
        img.loading = 'lazy';
      }
    });
  }

  function preloadImages() {
    bannerItems.forEach(item => {
      const img = item.querySelector('img');
      if (img && !img.complete) {
        const image = new Image();
        image.src = img.src;
        image.onload = () => {
          img.src = image.src;
          img.style.display = 'block';
        };
      }
    });

    const lcpImg = block.querySelector(
      'img[src$="/media_126854d….png?width=2000&format=webply&optimize=medium"]'
    );
    if (lcpImg && !lcpImg.complete) {
      const lcpImage = new Image();
      lcpImage.src = lcpImg.src;
      lcpImage.onload = () => {
        lcpImg.src = lcpImage.src;
        lcpImg.style.display = 'block';
      };
    }
  }

  // Lazy load images
  lazyLoadImages();

  // Preload the LCP image
  preloadImages();

  // Ensure initial carousel display
  showSlides(slideIndex);
}
