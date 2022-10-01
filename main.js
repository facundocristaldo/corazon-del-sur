function downscroll(element) {
  const ele = document.getElementById(element);
  window.scrollTo(ele.offsetLeft, ele.offsetTop);
}

window.addEventListener("load", () => {
  function addAnimation(id) {
    const element = document.querySelector(id);
    const observer = new IntersectionObserver((entries) => {
      element.classList.toggle("section-fade-in", entries[0].isIntersecting);
    });
    observer.observe(element);
  }
  addAnimation("#sesion-tarot .description");
  addAnimation("#sesion-astrologica .description");
  addAnimation("#curso-tejido .description");
  addAnimation("#curso-astrologia .description");
  addAnimation("#curso-tarot .description");
});

function movelinks(index) {
  if (index === -1) {
    console.log("left");
  }
  if (index === 1) {
    console.log("right");
  }
}
