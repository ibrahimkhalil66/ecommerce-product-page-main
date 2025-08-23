function displayImage() {
  const imgElement = document.querySelector(".big-picture");
  const firstImg = document.querySelector(".image-product-1");
  const secondImg = document.querySelector(".image-product-2");
  const thirdImg = document.querySelector(".image-product-3");
  const fourthImg = document.querySelector(".image-product-4");

  const thumnails = [
    `<img src="image-product-1.jpg" alt="">`,
    `<img src="image-product-2.jpg" alt="">`,
    `<img src="image-product-3.jpg" alt="">`,
    `<img src="image-product-4.jpg" alt="">`,
  ];

  firstImg.addEventListener("click", () => {
    imgElement.innerHTML = thumnails[0];
  });
  secondImg.addEventListener("click", () => {
    imgElement.innerHTML = thumnails[1];
  });
  thirdImg.addEventListener("click", () => {
    imgElement.innerHTML = thumnails[2];
  });
  fourthImg.addEventListener("click", () => {
    imgElement.innerHTML = thumnails[3];
  });
}
displayImage();
function quantityAddMinus() {
  const quantityElement = document.querySelector(".quantity");
  const plusElement = document.querySelector(".js-plus-btn");
  const minusElement = document.querySelector(".js-minus-btn");
  const priceElement = document.querySelector(".js-price");
  const oldPriceElement = document.querySelector(".js-old-price");
  let quantity = 1;
  const priceCents = 25000;
  let oldPrice = 25000;
  let lastPrice = priceCents / 2;

  plusElement.addEventListener("click", () => {
    if (quantity >= 10) {
      return alert(`${quantity} is the Max of Quantity`);
    } else {
      lastPrice += priceCents / 2;
      oldPrice += priceCents;
      priceElement.innerHTML = `$${lastPrice / 100}.00`;
      oldPriceElement.innerHTML = `$${oldPrice / 100}.00`;
      quantity++;
      quantityElement.innerHTML = `${quantity}`;
    }
  });
  minusElement.addEventListener("click", () => {
    if (quantity <= 1) {
      alert(`${quantity} is the min quantity`);
    } else {
      lastPrice -= priceCents / 2;
      oldPrice -= priceCents;
      priceElement.innerHTML = `$${lastPrice / 100}.00`;
      oldPriceElement.innerHTML = `$${oldPrice / 100}.00`;
      quantity--;
      quantityElement.innerHTML = `${quantity}`;
    }
  });
}

quantityAddMinus();

function addToCart() {
  const addToCartBtn = document.querySelector(".js-btn");
  addToCartBtn.addEventListener("click", () => {
    addToCartBtn.innerHTML = `<i class="fa-solid fa-circle-check done-img"></i> Added to Cart`;
    setTimeout(() => {
      addToCartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Add to cart`;
    }, 1500);
  });
}

addToCart();
