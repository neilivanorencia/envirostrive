// Swiper for Testimonials Section
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    334: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Frequently Asked Questions
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const container = item.querySelector(".faq__item-container");

    container.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
});

// Setting current year in the footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Scroll Reveal Base Configuration
const scrollReveal = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: false,
  mobile: true,
  viewFactor: 0.2,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
});

const animations = {
  fromTop: {
    distance: "50px",
    origin: "top",
    interval: 100,
    opacity: 0,
  },
  fromLeft: {
    distance: "50px",
    origin: "left",
    opacity: 0,
    viewFactor: 0.3,
  },
  fromRight: {
    distance: "50px",
    origin: "right",
    opacity: 0,
    viewFactor: 0.3,
  },
  fadeIn: {
    distance: "0px",
    opacity: 0,
    scale: 0.95,
  },
};

// Hero Section
scrollReveal.reveal(".hero__text", {
  ...animations.fromLeft,
  delay: 200,
});

scrollReveal.reveal(".hero__image", {
  ...animations.fromRight,
  delay: 400,
});

// Brands Section
scrollReveal.reveal(".brands__container", {
  ...animations.fromTop,
  delay: 600,
  interval: 150,
});

// Features Section
scrollReveal.reveal(".features__heading", {
  ...animations.fadeIn,
  delay: 200,
});

scrollReveal.reveal(".feature__text", {
  ...animations.fromLeft,
  delay: 300,
  interval: 200,
});

scrollReveal.reveal(".feature__img", {
  ...animations.fromRight,
  delay: 400,
  interval: 200,
});

// Testimonials Section
scrollReveal.reveal(".testimonials", {
  ...animations.fromTop,
  delay: 300,
  interval: 200,
});

// Services Section
scrollReveal.reveal(".services__heading", {
  ...animations.fromTop,
  delay: 200,
});

scrollReveal.reveal(".services__item", {
  ...animations.fromTop,
  delay: 300,
  interval: 200,
});

// Process Section
scrollReveal.reveal(".process__heading", {
  ...animations.fromTop,
  delay: 200,
});

scrollReveal.reveal(".process__item", {
  ...animations.fromTop,
  delay: 300,
  interval: 200,
});

// Impact Section
scrollReveal.reveal(".impact__heading", {
  ...animations.fromTop,
  delay: 200,
});

scrollReveal.reveal(".impact__text", {
  ...animations.fromLeft,
  delay: 300,
});

scrollReveal.reveal(".impact__image", {
  ...animations.fromRight,
  delay: 400,
});

// FAQ Section
scrollReveal.reveal(".faq__heading", {
  ...animations.fromTop,
  delay: 200,
});

scrollReveal.reveal(".faq__items", {
  ...animations.fromLeft,
  delay: 300,
  interval: 150,
});

scrollReveal.reveal(".faq__image", {
  ...animations.fromRight,
  delay: 400,
});

// Contact Section
scrollReveal.reveal(".contact__heading", {
  ...animations.fromTop,
  delay: 200,
});

scrollReveal.reveal(".contact__text", {
  ...animations.fromLeft,
  delay: 300,
});

// Footer
scrollReveal.reveal(".footer", {
  ...animations.fromTop,
  delay: 200,
  distance: "30px",
  viewFactor: 0.1,
});
