// single-img-banner.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the image element
    var img = document.querySelector('.single-img-banner img');

    // Preload the image
    if (img) {
        var src = img.getAttribute('src');
        var imgPreload = new Image();
        imgPreload.src = src;
        imgPreload.onload = function() {
            // Once the image is loaded, set it as the src of the img element
            img.setAttribute('src', src);
            // Add a class to show the image
            img.classList.add('loaded');
        };
    }
});
