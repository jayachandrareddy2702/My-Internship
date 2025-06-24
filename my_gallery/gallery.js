document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.lightbox .close');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    let currentIndex = 0;

    function OpenLightbox(index) {
        const image = images[index];
        if(!image) return;
        lightbox.style.display = 'flex';
        lightboxImage.src = image.dataset.full;
        lightboxCaption.textContent = image.dataset.caption;
        currentIndex = index;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        OpenLightbox(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        OpenLightbox(currentIndex);
    }

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            OpenLightbox(index);
            lightboxImage.style.maxWidth = '1000px';
            lightboxImage.style.maxHeight = '1000px';
            lightboxImage.style.objectFit = 'contain';
        });
    });

    closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
    });

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightbox.style.display = 'none';
    }
    else if (event.key === 'ArrowRight') {
        showNextImage();
    }
    else if (event.key === 'ArrowLeft') {
        showPrevImage();
    }
    });
});
