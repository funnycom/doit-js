function calculate(r) {
  return Math.PI * r * r;   
}

const result = document.querySelector("#result");  // 결괏값을 표시할 부분
const radius = prompt("반지름의 크기는? ");

result.innerText = `원의 넓이 : ${calculate(radius)}`;