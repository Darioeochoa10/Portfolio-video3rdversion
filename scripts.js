document.addEventListener("DOMContentLoaded", () => {
  const carousels = [
    {
      container: document.querySelector(".short-videos-carousel"),
      prevBtn: document.querySelector(".short-prev-btn"),
      nextBtn: document.querySelector(".short-next-btn"),
    },
    {
      container: document.querySelector(".long-videos-carousel"),
      prevBtn: document.querySelector(".long-prev-btn"),
      nextBtn: document.querySelector(".long-next-btn"),
    },
  ];

  carousels.forEach(({ container, prevBtn, nextBtn }) => {
    let scrollAmount = 0;
    const videos = Array.from(container.querySelectorAll("video"));

    function updateVideos() {
      const containerWidth = container.offsetWidth;
      const halfWidth = containerWidth / 2;
      videos.forEach((video) => {
        const videoCenter =
          video.offsetLeft + video.offsetWidth / 2 - container.scrollLeft;
        const distance = Math.abs(videoCenter - halfWidth);
        if (distance < halfWidth) {
          video.classList.add("active");
          video.classList.remove("inactive");
        } else {
          video.classList.add("inactive");
          video.classList.remove("active");
        }
      });
    }

    function scrollToVideo(video) {
      const containerWidth = container.offsetWidth;
      const videoCenter = video.offsetLeft + video.offsetWidth / 2;
      container.scrollTo({
        left: videoCenter - containerWidth / 2,
        behavior: "smooth",
      });
    }

    prevBtn.addEventListener("click", () => {
      const activeIndex = videos.findIndex((video) =>
        video.classList.contains("active")
      );
      if (activeIndex > 0) {
        scrollToVideo(videos[activeIndex - 1]);
      }
    });

    nextBtn.addEventListener("click", () => {
      const activeIndex = videos.findIndex((video) =>
        video.classList.contains("active")
      );
      if (activeIndex < videos.length - 1) {
        scrollToVideo(videos[activeIndex + 1]);
      }
    });

    container.addEventListener("scroll", updateVideos);
    window.addEventListener("resize", updateVideos);

    updateVideos();
  });
});
