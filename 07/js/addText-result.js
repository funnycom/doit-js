const orderInfo = document.querySelector("#orderInfo");   // 주문 정보 영역
const orderButton = document.querySelector("#order");   // 주문하기 버튼
const title = document.querySelector("#container > h2");   // 책 제목 요소

orderButton.addEventListener("click", () =>{
  let newP = document.createElement("p");
  let textNode = document.createTextNode(title.innerText);    // title의 텍스트 부분만 가져오기
  newP.appendChild(textNode);
  newP.style.fontSize = "0.8em";
  newP.style.color = "blue";
  orderInfo.appendChild(newP);
}, { once : true });