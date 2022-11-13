const items = document.querySelectorAll("li"); // 모든 항목 가져오기

for (let item of items) {
  item.addEventListener("click", function () {
    // 항목 클릭했을 때 실행할 함수
    this.parentNode.removeChild(this); // 부모 노드에서 삭제
    // 아래 소스도 가능
    // this.remove(this);
  });
}
