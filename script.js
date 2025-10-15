// script.js

// Wait until window is fully loaded (including images, fonts, etc.)
window.addEventListener('load', () => {
  // Initialize AOS after everything is loaded
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
    console.log('AOS initialized successfully');
  } else {
    console.error('AOS is not loaded. Check the CDN link.');
  }
});

// Alternative: If load event doesn't work, try DOMContentLoaded with a small delay
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure AOS is fully loaded
  setTimeout(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
      });
      console.log('AOS initialized with delay');
    }
  }, 100);
});

// Your arrays for later use
const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi"
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha"
];

const cards = [
  {
    imgSrc: "./src/assets/sushi-12.png",
    alt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.8",
    price: "$21.00"
  },
  {
    imgSrc: "./src/assets/sushi-11.png",
    alt: "sushi-11",
    title: "Originale Sushi",
    rating: "4.8",
    price: "$21.00",
    active: true
  },
  {
    imgSrc: "./src/assets/sushi-10.png",
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.8",
    price: "$21.00"
  }
];

// Debug function to check if AOS is working
function checkAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  console.log(`Found ${elements.length} elements with data-aos attribute`);
  elements.forEach((el, index) => {
    console.log(`Element ${index + 1}:`, el);
  });
}

// Call debug function after a delay
setTimeout(checkAOS, 2000);