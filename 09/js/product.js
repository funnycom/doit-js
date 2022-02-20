const register = document.querySelector("#register");

function Product(product, price, quantity) {
  this.product = product;
  this.price = price;
  this.quantity = quantity;
};

function displayProduct(product) {
  const productList = document.querySelector("#productList");
  const productItem = document.createElement("li");
  productItem.innerText = `${product.product} / ${product.price} / ${product.quantity}`;
  productList.appendChild(productItem);
}

register.addEventListener("click", (e) => {
  e.preventDefault();
  const product = document.querySelector("#product");
  const price = document.querySelector("#price");
  const quantity = document.querySelector("#quantity");

  const newProduct = new Product(product.value, price.value, quantity.value);

  product.value = "";
  price.value = "";
  quantity.value = "";

  // console.log(newProduct);
  displayProduct(newProduct);
})
