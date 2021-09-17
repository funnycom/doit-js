const cart = document.querySelector("#cart");   // 장바구니 영역
const orderButton = document.querySelector("#order");   // 주문하기 버튼
const title = document.querySelector("#container > h2");   // 책 제목 요소

orderButton.addEventListener("click", () =>{
  let newP = document.createElement("p");
  let txtNode = document.createTextNode(title.innerText);
  newP.appendChild(txtNode);
  newP.style.fontSize = "0.8em";
  newP.style.color = "blue";
  cart.appendChild(newP);
}, { once : true });