const addBttn = document.querySelector("#add");  // '추가' 버튼 가져오기
const itemList = document.querySelector("#itemList");  // 결과 표시할 영역 가져오기 
addBttn.addEventListener("click", register);

function register() {
  const newItem = document.createElement("li");  // 요소 노드 추가 
  const subject = document.querySelector("#subject");  // 폼의 텍스트 필드
  const newText = document.createTextNode(subject.value);  // 텍스트 필드의 값을 텍스트 노드로 만들기
  newItem.appendChild(newText);  // 텍스트 노드를 요소 노드의 자식 노드로 추가
  // itemList.appendChild(newItem);
  itemList.insertBefore(newItem, itemList.childNodes[0]);  // 자식 노드중 첫번째 노드 앞에 추가

  subject.value="";
}