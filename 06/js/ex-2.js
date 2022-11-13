const button = document.querySelector("button");

// 미리 .convert 스타일 만들어 놓고 토글하기
button.addEventListener("click", function() {
  document.body.classList.toggle("convert");
});