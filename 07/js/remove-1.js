const title = document.querySelector("h1");
const items = document.querySelectorAll("li");  // 모든 항목 가져오기

title.onclick = function() {
  title.parentNode.removeChild(title);
}

// 아래와 같이 작성해도 됨
// title.addEventListener("click", () => {
//   title.parentNode.removeChild(title);
// });

for(let item of items) {
  item.addEventListener("click", function () {  // 항목 클릭했을 때 실행할 함수
    this.parentNode.removeChild(this);  // 부모 노드에서 삭제
  });
}