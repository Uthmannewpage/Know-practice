export default function decorate(block) {
    // Your existing code...
  
    function lazyLoadImages() {
      const bMobArrowImages = block.querySelectorAll('.b-mob-arrow img');
      bMobArrowImages.forEach(img => {
        if (!img.complete) {
          img.loading = 'lazy';
        }
      });
    }
  
    // Lazy load images within the b-mob-arrow block
    lazyLoadImages();
  
    // Other functions and code...
  }
  