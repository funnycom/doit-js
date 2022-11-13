// 책 목록에 추가
const title = document.querySelector("#title"); // '제목' 정보
const author = document.querySelector("#author"); // '저자' 정보
const save = document.querySelector("#save"); // '저장하기' 버튼
const bookList = document.querySelector("#bookList"); // 정보가 표시될 영역

save.addEventListener("click", (e) => {
  e.preventDefault();

  const item = document.createElement("li");
  item.innerHTML = `
    ${title.value} - ${author.value} 
    <span class="delButton">삭제</span>
  `;
  bookList.appendChild(item);

  title.value = "";
  author.value = "";

  // 목록에서 제거하기

  const delButtons = document.querySelectorAll(".delButton"); // '삭제' 버튼 모두 가져오기

  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeItem);
  }
});

function removeItem() {
  let list = this.parentNode;
  list.parentNode.removeChild(list);
}
