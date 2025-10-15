// script.js

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (already loaded via CDN in index.html)
  AOS.init({
    duration: 1000,
    offset: 100,
  });
});

// If you still want your arrays for later use:
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