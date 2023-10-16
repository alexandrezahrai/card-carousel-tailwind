const slides = document.querySelectorAll(".card");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

// spread the slides out
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// current slide counter
let curSlide = 0;

// maximum number of slides
let maxSlide = slides.length - 1;

// next slide functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  // move slide by -100%
  moveSlide();
});

// previous slide functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  // move slide by +100%
  moveSlide();
});

function moveSlide() {
  slides.forEach((slide, index) => {
    if (index !== curSlide) {
      slide.style.transform = `translateX(${
        100 * (index - curSlide)
      }%) scale(0.7)`;
      slide.style.opacity = "0";
    } else {
      slide.style.transform = `translateX(${
        100 * (index - curSlide)
      }%) scale(1)`;
      slide.style.opacity = "1";
    }
  });
}
