function updateCurrent(items) {
  const children = items.children;
  for (let i = 0; i < children.length; i++) {
    if (i === 0) {
      children[i].classList.add("current");
    } else {
      children[i].classList.remove("current");
    }
  }
}

document.querySelectorAll(".carousel").forEach((carousel) => {
  updateCurrent(carousel.querySelector(".carousel-items"));
});

function nextSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelector(".carousel-items");
  const firstItem = items.firstElementChild;
  items.appendChild(firstItem.cloneNode(true));
  items.removeChild(firstItem);
  updateCurrent(items);
}

function prevSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelector(".carousel-items");
  const lastItem = items.lastElementChild;
  items.insertBefore(lastItem.cloneNode(true), items.firstElementChild);
  items.removeChild(lastItem);
  updateCurrent(items);
}
