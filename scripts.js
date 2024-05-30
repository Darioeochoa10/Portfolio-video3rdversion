document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const items = carousel.querySelector(".carousel-items");
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");
    let index = 0;

    prevButton.addEventListener("click", () => {
      if (index > 0) {
        index--;
        items.style.transform = `translateX(-${index * 100}%)`;
      }
    });

    nextButton.addEventListener("click", () => {
      if (index < items.children.length - 1) {
        index++;
        items.style.transform = `translateX(-${index * 100}%)`;
      }
    });
  });
});
