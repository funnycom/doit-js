const buttons = document.querySelectorAll("p > span"); // 모든 항목 가져오기

for (let button of buttons) {
  button.addEventListener("click", function () {
    // 항목 클릭했을 때 실행할 함수
    // 부모 노드에서 삭제
    this.parentNode.remove(this);
  });
}
