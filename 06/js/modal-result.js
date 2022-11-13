const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  modalBox.classList.toggle("active"); // 클릭하면 클래스리스트에 .active 스타일 추가
});
