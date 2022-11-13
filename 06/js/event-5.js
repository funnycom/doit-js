const button = document.querySelector("#bttn");

button.addEventListener("click", () => {
  const word = document.querySelector("#word").value;   // 텍스트 상자의 내용
  const result = document.querySelector("#result");   // 결괏값 표시할 영역
  let count = word.length;   // 문자열의 길이

  result.innerText = `${count}`;  // 결괏값 표시
});