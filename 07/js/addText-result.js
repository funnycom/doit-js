const orderInfo = document.querySelector("#orderInfo");   // 주문 정보 영역
const orderButton = document.querySelector("#order");   // 주문하기 버튼
const title = document.querySelector("#container > h2");   // 책 제목 요소

orderButton.addEventListener("click", () =>{   
  let newP = document.createElement("p");    // 새로운 p 요소 생성
  let textNode = document.createTextNode(title.innerText);    // title의 텍스트 부분만 가져와 텍스트 노드로 생성
  
  newP.appendChild(textNode);      // 텍스트 노드를 새로운 p 요소에 추가
  newP.style.fontSize = "0.8em";
  newP.style.color = "blue";
  orderInfo.appendChild(newP);    // 새로운 p 요소를 orderInfo 영역에 추가
}, { once : true });