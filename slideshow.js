// Slideshow background script for 8 images, 4 at a time, animated from corners with fade in/out.
// Place 8 images in the 'images' folder as img1.jpg, img2.jpg, ..., img8.jpg

const imageCount = 8;
const images = Array.from({length: imageCount}, (_, i) => `images/img${i+1}.jpg`);
const imagesPerSet = 4;
let currentSet = 0;

const slideshowContainer = document.createElement('div');
slideshowContainer.id = 'slideshow-bg';
document.body.prepend(slideshowContainer);

function createImageDiv(src, corner) {
    const div = document.createElement('div');
    div.className = `slideshow-img corner-${corner}`;
    div.style.backgroundImage = `url('${src}')`;
    return div;
}

function showNextSet() {
    slideshowContainer.innerHTML = '';
    for (let i = 0; i < imagesPerSet; i++) {
        const imgIdx = (currentSet * imagesPerSet + i) % imageCount;
        const corner = i;
        const imgDiv = createImageDiv(images[imgIdx], corner);
        slideshowContainer.appendChild(imgDiv);
        // Trigger fade-in
        setTimeout(() => imgDiv.classList.add('fade-in'), 10);
    // Fade-out after 19s
    setTimeout(() => imgDiv.classList.remove('fade-in'), 19000);
    }
    // Next set after 20s
    currentSet = (currentSet + 1) % (imageCount / imagesPerSet);
    setTimeout(showNextSet, 20000);
}

showNextSet();
