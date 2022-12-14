let indexImgToShow = 0;
let cartHasItems = false;

const images = [
  "/assets/productos/agenda/agenda1.jpeg",
  "/assets/productos/agenda/agenda2.jpeg",
  "/assets/productos/agenda/agenda3.jpeg",
];

function displayImg() {
  const img = document.querySelector("#bigImg");
  img.src = images[indexImgToShow];
}
function displayCart() {
  const cart = document.querySelector("#cart-icon");
  if (cartHasItems) {
    cart.src = "/assets/icon-cart-items.svg";
  } else {
    cart.src = "/assets/icon-cart.svg";
  }
}

function changeImg(index) {
  indexImgToShow = index;
  displayImg();
}

function addToCart() {
  cartHasItems = true;
  displayCart();
}
