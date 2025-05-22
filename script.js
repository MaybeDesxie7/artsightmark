// script.js for Artsight Mark Website

// Background Image Slider
const bgImages = document.querySelectorAll('.hero-bg-slider img');
let currentIndex = 0;
setInterval(() => {
  bgImages.forEach((img, index) => {
    img.style.opacity = index === currentIndex ? '0.2' : '0';
  });
  currentIndex = (currentIndex + 1) % bgImages.length;
}, 4000);

// Rotating Slogan (manual implementation since CSS ::before doesn't support animation content changes)
const slogans = [
  'Badges • Logos • Flyers',
  'Banners • Branding',
  'T-Shirt Printing • Invoice Books'
];
let sloganIndex = 0;
const sloganEl = document.querySelector('.rotating-slogan');
setInterval(() => {
  sloganEl.textContent = slogans[sloganIndex];
  sloganIndex = (sloganIndex + 1) % slogans.length;
}, 3000);

// Rotating Service Image Carousel
const serviceImages = document.querySelectorAll('.services-image-carousel img');
let currentService = 0;
setInterval(() => {
  serviceImages.forEach((img, index) => {
    img.style.display = index === currentService ? 'block' : 'none';
  });
  currentService = (currentService + 1) % serviceImages.length;
}, 3000);

// Portfolio image click scroll effect
const portfolioGallery = document.querySelector('.portfolio-gallery');
portfolioGallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }
});
