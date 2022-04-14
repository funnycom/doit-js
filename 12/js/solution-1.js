const url = "https://reqres.in/api/products/10"
const result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);
    console.log(product);
    result.innerHTML = `
      <p>상품명 : ${product.data.name}</p>
      <p>생산년도 : ${product.data.year}</p>
      `;
    }
  }