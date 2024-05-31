// Este código JavaScript es solo un ejemplo básico para el funcionamiento de los carruseles.
// Deberás adaptarlo según tus necesidades específicas y la lógica de tu aplicación.

// Videos para el primer carrusel (cambia estos enlaces según tus videos)
const videosCarousel1 = [
  "https://www.youtube.com/embed/0ZG7_BDacJA",
  "https://www.youtube.com/embed/QbJGomZ-tKU",
  "https://www.youtube.com/embed/9dKSf8IlXNM",
  "https://www.youtube.com/embed/rG4tQFEoQW8",
];

// Videos para el segundo carrusel (cambia estos enlaces según tus videos)
const videosCarousel2 = [
  "https://www.youtube.com/embed/VIDEO1",
  "https://www.youtube.com/embed/VIDEO2",
  "https://www.youtube.com/embed/VIDEO3",
  "https://www.youtube.com/embed/VIDEO4",
];

const carousel1 = document.querySelector(".video-carousel"); // Carrusel 1
const carousel2 = document.querySelectorAll(".video-carousel")[1]; // Carrusel 2
const prevButton1 = document.getElementById("prev-video"); // Botón anterior Carrusel 1
const nextButton1 = document.getElementById("next-video"); // Botón siguiente Carrusel 1
const prevButton2 = document.getElementById("prev-video-2"); // Botón anterior Carrusel 2
const nextButton2 = document.getElementById("next-video-2"); // Botón siguiente Carrusel 2

// Variable para controlar el índice del video actual en cada carrusel
let currentIndex1 = 0;
let currentIndex2 = 0;

// Función para cargar los videos en el carrusel
function loadVideos(carousel, videos, currentIndex) {
  carousel.innerHTML = ""; // Limpiar el contenido actual del carrusel
  videos.forEach((video, index) => {
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");

    const iframe = document.createElement("iframe");
    iframe.src = video;
    iframe.width = "300";
    iframe.height = "200";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";

    videoContainer.appendChild(iframe);
    carousel.appendChild(videoContainer);

    // Resaltar el video actual
    if (index === currentIndex) {
      videoContainer.classList.add("current");
    }
  });
}

// Función para mostrar el video actual en el carrusel
function showVideo(carousel, currentIndex) {
  const videos = carousel.querySelectorAll(".video-container");
  videos.forEach((video, index) => {
    if (index === currentIndex) {
      video.classList.add("current");
    } else {
      video.classList.remove("current");
    }
  });
}

// Cargar los videos iniciales en los carruseles
loadVideos(carousel1, videosCarousel1, currentIndex1);
loadVideos(carousel2, videosCarousel2, currentIndex2);

// Manejar el evento click en el botón anterior del primer carrusel
prevButton1.addEventListener("click", () => {
  currentIndex1 =
    (currentIndex1 - 1 + videosCarousel1.length) % videosCarousel1.length;
  showVideo(carousel1, currentIndex1);
});

// Manejar el evento click en el botón siguiente del primer carrusel
nextButton1.addEventListener("click", () => {
  currentIndex1 = (currentIndex1 + 1) % videosCarousel1.length;
  showVideo(carousel1, currentIndex1);
});

// Manejar el evento click en el botón anterior del segundo carrusel
prevButton2.addEventListener("click", () => {
  currentIndex2 =
    (currentIndex2 - 1 + videosCarousel2.length) % videosCarousel2.length;
  showVideo(carousel2, currentIndex2);
});

// Manejar el evento click en el botón siguiente del segundo carrusel
nextButton2.addEventListener("click", () => {
  currentIndex2 = (currentIndex2 + 1) % videosCarousel2.length;
  showVideo(carousel2, currentIndex2);
});
