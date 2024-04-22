export default function decorate(block) {
    const bannerItems = [...block.children];
  
    // Create carousel container
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');
  
    // Create carousel slides container
    const slidesContainer = document.createElement('div');
    slidesContainer.classList.add('slides-container');
  
    // Create previous and next buttons
    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.textContent = '❮';
  
    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = '❯';
  
    // Append buttons to the carousel container
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(slidesContainer);
    carouselContainer.appendChild(nextButton);
  
    // Append carousel container to the block
    block.appendChild(carouselContainer);
  
    let slideIndex = 0;
  
    // Function to show slides
    function showSlides(index) {
      if (index >= bannerItems.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = bannerItems.length - 1;
      }
  
      // Hide all slides
      bannerItems.forEach(item => {
        item.style.display = 'none';
      });
  
      // Show the current slide
      bannerItems[slideIndex].style.display = 'block';
    }
  
    // Show the initial slide
    showSlides(slideIndex);
  
    // Event listeners for previous and next buttons
    prevButton.addEventListener('click', () => {
      showSlides(slideIndex -= 1);
    });
  
    nextButton.addEventListener('click', () => {
      showSlides(slideIndex += 1);
    });
  }
  