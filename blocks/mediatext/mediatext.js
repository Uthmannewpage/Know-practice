export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);
  
    // setup video columns
    const row = block.firstElementChild; // Selecting only the first child
    const videoCol = row.querySelector('div');
    const textCol = row.querySelector('div:last-child');
    if (videoCol && textCol) {
        const videoUrl = videoCol.textContent.trim();
        if (videoUrl) {
            const video = document.createElement('video');
            video.src = videoUrl;
            video.controls = true;
            video.classList.add('custom-video');
            video.setAttribute('type', 'video/mp4'); // specify the video type
            video.setAttribute('autoplay', ''); // add autoplay if desired
            video.setAttribute('loop', ''); // add loop if desired
            video.setAttribute('muted', ''); // add muted if desired
            textCol.before(video);
            videoCol.remove();
        }
    }
}
