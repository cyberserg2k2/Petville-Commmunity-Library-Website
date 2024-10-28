// Gallery data
const galleryData = [
    { src: 'images/gal-library.png', alt: 'Library exterior', caption: 'Our beautiful library building' },
    { src: 'images/gal-readingarea.png', alt: 'Reading area', caption: 'You are Welcome to study at our Cozy reading lounge' },
    { src: 'images/gal-childrenarea.png', alt: 'Children\'s section', caption: 'The Summer Reading Challenge was fun for the kids' },
    { src: 'images/gal-moderncomputer.png', alt: 'Computer lab', caption: 'Our facility is equipped with state-of-the-art computers for your use' },
    { src: 'images/gal-quietreading.png', alt: 'Study rooms', caption: 'Our Patrons enjoy the Quiet study rooms' },
    { src: 'images/gal-events.png', alt: 'Event space', caption: 'We have a Versatile event space for activities' },
    { src: 'images/gal-outdoorlibrary.png', alt: 'Outdoor library', caption: 'Everyone is welcome to enjoy our pleasant FREE outdoor library' },
    { src: 'images/gal-childrensplay.png', alt: 'Children playground', caption: 'We have provided a wonderful place for kids to learn, play, and grow! ' }
];

let currentImageIndex = 0;

// Function to create gallery items
function createGalleryItems() {
    const gallery = document.getElementById('gallery');
    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <p>${item.caption}</p>
        `;
        galleryItem.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox(item);
        });
        gallery.appendChild(galleryItem);
    });
}

// Function to open lightbox
function openLightbox(item) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');

    // Add loading indicator
    lightboxImg.style.opacity = '0';
    lightbox.style.display = 'block';
    
    // Load image
    lightboxImg.src = item.src;
    lightboxImg.onload = () => {
        lightboxImg.style.opacity = '1';
    };
    caption.innerHTML = item.caption;

    // Add navigation buttons if they don't exist
    if (!document.querySelector('.nav-button')) {
        addNavigationButtons();
    }
}

// Function to add navigation buttons
function addNavigationButtons() {
    const lightbox = document.getElementById('lightbox');
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button prev';
    prevButton.innerHTML = '❮';
    prevButton.onclick = showPreviousImage;
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button next';
    nextButton.innerHTML = '❯';
    nextButton.onclick = showNextImage;
    
    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);
}

// Function to show previous image
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    openLightbox(galleryData[currentImageIndex]);
}

// Function to show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    openLightbox(galleryData[currentImageIndex]);
}

// Function to close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Handle keyboard navigation
function handleKeyboardNavigation(event) {
    if (!document.getElementById('lightbox').style.display === 'none') {
        switch(event.key) {
            case 'ArrowLeft':
                showPreviousImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
            case 'Escape':
                closeLightbox();
                break;
        }
    }
}

// Handle touch events for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            showPreviousImage();
        } else {
            showNextImage();
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createGalleryItems();
    setTimeout(animateGalleryItems, 500);

    // Add event listener for the close button
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', closeLightbox);
    }

    // Close lightbox when clicking outside the image
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Add touch events for mobile
    lightbox.addEventListener('touchstart', handleTouchStart);
    lightbox.addEventListener('touchend', handleTouchEnd);
});

// Add a simple animation to gallery items
function animateGalleryItems() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(15)';
        }, index * 100);
    });
}

