let mainSection = document.getElementById("mainSection");

fetch("https://api.everrest.educata.dev/shop/products/all?page_size=10")
  .then((res) => res.json())
  .then((item) =>
    item.products.forEach((element) => {
      mainSection.innerHTML += addItem(element);
    })
  );

function addItem(item) {
  item.title.length > 24
    ? (item.title = `${item.title.slice(0, 24)}...`)
    : (item.title = item.title);
  item.price.discountPercentage == 0
    ? (item.price.discountPercentage = "")
    : (item.price.discountPercentage = `-${item.price.discountPercentage}%`);
  item.stock == 0
    ? (item.stock = "Sold Out")
    : (item.stock = `Stock: ${item.stock}`);
  return `<div class="parent">
    <div class="card">
  <img src="" alt="" class="cardImg"/>
  <div class="content-box">
    <span class="card-title">${item.title}</span>
    <p class="card-content">Rating: ${item.rating}/5 | ${item.stock} | Warr: ${item.warranty}</p>
    <button class="see-more">Add To cart</button>
    <button class="see-more">See More</button>
  </div>
  <div class="date-box">
    <span class="month">${item.price.current}$</span>
    <span class="date">${item.price.discountPercentage}</span>
  </div>
</div>
</div>`;
}

function seeProducts() {
  mainSection.scrollIntoView({
    behavior: "smooth",
  });
}
