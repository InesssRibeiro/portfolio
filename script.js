const projectImgs = document.querySelectorAll(".img-proj");
const projModalEl = document.querySelector("dialog");
const dialogTitleEl = document.getElementById("dialog-title");
const iframeEl = document.querySelector("iframe");
const closeBtn = document.getElementById("closeBtn");
const gridEl = document.querySelector(".grid");
const projectsSection = document.getElementById("projects");

const videosSrc = [
  "https://www.youtube.com/embed/Gr528XeJnWM?si=T5gELHKI-HhDWgRj&autoplay=1",
  "https://www.youtube.com/embed/SQDVLlmUBu8?si=LDKrpDy85eVDUU5B&autoplay=1",
  "https://www.youtube.com/embed/F-LXOcESicU?si=QOG4aXDPzZwpSw01&autoplay=1",
  "https://www.youtube.com/embed/WWyfdatj8FE?si=H39AJMIyYTOpkrSx&autoplay=1",
];

function preventScroll(e) {
  e.preventDefault();
  window.scrollTo(0, 1600); // keeps page at top
}

projectImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    iframeEl.src = videosSrc[index];

    window.addEventListener("scroll", preventScroll, { passive: false });

    const projTitle = img.nextElementSibling.textContent;
    dialogTitleEl.textContent = projTitle;

    projModalEl.showModal();
  });
});

const closeModal = () => {
  iframeEl.src = "";
  window.removeEventListener("scroll", preventScroll, { passive: false });
  projModalEl.close();
};

closeBtn.addEventListener("click", closeModal);
