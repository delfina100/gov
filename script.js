const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

// Swipe mobile
let startX = 0;

track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < dots.length - 1) index++;
  if (endX - startX > 50 && index > 0) index--;
  updateCarousel();
});

//zoom
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

document.querySelectorAll(".clickable").forEach(img => {
  img.addEventListener("click", () => {
    viewerImg.src = img.src;
    viewer.style.display = "flex";
  });
});

closeViewer.addEventListener("click", () => {
  viewer.style.display = "none";
  viewerImg.src = "";
});

const zoomBtn = document.getElementById("zoomBtn");

zoomBtn.addEventListener("click", () => {
  const currentImg = slides[index].querySelector("img");
  viewerImg.src = currentImg.src;
  viewer.style.display = "flex";
});

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateCarousel();
  }
});
