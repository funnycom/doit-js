const result = document.querySelector("#result");  // 결괏값을 표시할 부분
const firstDay = new Date("2021-07-01");  // 시작한 날
const today = new Date();  // 오늘

let passedTime = today.getTime() - firstDay.getTime();  // 시작한 날부터 오늘까지 흐른 시간(밀리초)
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));  // 밀리초를 일(date) 수로 계산

result.innerText = passedDay;