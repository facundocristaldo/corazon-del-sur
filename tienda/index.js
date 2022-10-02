let layout = "list";
let filter = "off";

function changeLayout() {
  const buttonImg = document.querySelector("#button-list-view > img");
  if (layout === "box") {
    layout = "list";
    buttonImg.src = "/corazon-del-sur/assets/icon-view-box.svg";
    buttonImg.alt = "Mostrar en cuadricula";
  } else {
    layout = "box";
    buttonImg.src = "/corazon-del-sur/assets/icon-view-list.svg";
    buttonImg.alt = "Mostrar como lista";
  }
  displayItems();
}
function renderStars(number) {
  const stars = document.createElement("div");
  stars.className = "stars";

  const filled = document.createElement("img");
  filled.src = "/corazon-del-sur/assets/icon-star-filled.svg";
  filled.alt = "+1";
  const contained = document.createElement("img");
  contained.src = "/corazon-del-sur/assets/icon-star-contained.svg";
  contained.alt = "0";

  for (let index = 0; index < number; index++) {
    stars.appendChild(filled.cloneNode());
  }
  for (let index = stars.children.length; index < 5; index++) {
    stars.appendChild(contained.cloneNode());
  }
  return stars;
}

function renderItem(item, index) {
  const li = document.createElement("li");
  li.classList.add("product");
  li.classList.add("dp-01");
  li.classList.add(layout === "box" ? "box" : "list");
  li.style = `--index:${index}`;
  const img = document.createElement("img");
  img.src = item.imgSrc;
  img.alt = `Producto ${item.name}`;

  function navigateProduct() {
    window.location.href = "/corazon-del-sur/tienda/producto/detalle";
  }
  li.onclick = navigateProduct;

  li.appendChild(img);

  const productContent = document.createElement("div");
  productContent.className = "product-content";
  const productHeading = document.createElement("div");
  productHeading.className = "product-heading";
  const title = document.createElement("p");
  title.className =
    layout === "box" ? "typography-paragraph" : "typography-heading";
  title.textContent = item.name;
  productHeading.appendChild(title);
  productHeading.appendChild(renderStars(item.stars));
  productContent.appendChild(productHeading);
  const pricingInfo = document.createElement("div");
  const price = document.createElement("h4");
  price.innerText = `$${item.price}`;
  price.className = "typography-heading";
  pricingInfo.appendChild(price);

  if (item.freeShipping) {
    const freeShipping = document.createElement("p");
    freeShipping.className = "typography-paragraph free-shipping";
    freeShipping.textContent = "Envío gratis";
    pricingInfo.appendChild(freeShipping);
  }
  productContent.appendChild(pricingInfo);
  li.appendChild(productContent);
  return li;
}

function displayItems() {
  const list = document.querySelector("ul#viewlist");
  list.className = `${layout}`;
  list.innerHTML = "";
  fetch("/corazon-del-sur/assets/products.json")
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      products.forEach((product, index) => {
        console.log(product);
        list.appendChild(renderItem(product, index));
      });
    });
}

function openFilter() {
  const filtersBox = document.querySelector(".filters-box");
  filtersBox.classList.toggle("open");
}

function applyFilter() {
  filter = "on";
  const buttonImg = document.querySelector("#button-filter>img");
  buttonImg.src = "/corazon-del-sur/assets/icon-filter-applied.svg";
  const filtersBox = document.querySelector(".filters-box");
  filtersBox.classList.remove("open");
}

function clearFilter() {
  filter = "off";
  const buttonImg = document.querySelector("#button-filter>img");
  buttonImg.src = "/corazon-del-sur/assets/icon-filter-empty.svg";
  const filtersBox = document.querySelector(".filters-box");
  filtersBox.classList.remove("open");

  document.querySelector("#category-select").value = "todo";
  document.querySelector("#price-min").value = "";
  document.querySelector("#price-max").value = "";
}

displayItems();
