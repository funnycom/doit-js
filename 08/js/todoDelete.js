const subject = document.querySelector("#subject");
const itemList = document.querySelector("#itemList");
const button = document.querySelector("button");

function manageItem() {
  let newItem = document.createElement("li");         // 새로운 li 요소 노드 만들기
  let newText = document.createTextNode(subject.value);   // li 요소의 텍스트 노드 만들기
  newItem.appendChild(newText);         // 텍스트 노드를 요소 노드의 자식 노드로 추가
  // itemList.appendChild(newItem);         // 요소 노드를 #itemList 영역에 추가 - 가장 끝에 추가함
  itemList.insertBefore(newItem, itemList.childNodes[0]);  // 자식 노드중 첫번째 노드 앞에 추가

  subject.value = "";         // 텍스트 필드 지우기        

  let items = document.querySelectorAll("li");  // 모든 항목 가져오기
  for(i=0; i<items.length; i++) {
    items[i].addEventListener("click", function() {  // 항목 클릭했을 때 실행할 함수
      if(this.parentNode)    // 부모 노드가 있다면 
        this.parentNode.removeChild(this);  // 부모 노드에서 삭제
    });
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  manageItem();
});

subject.addEventListener("keypress", (event) => {
  if (event.keyCode === 13)
  manageItem();
});


