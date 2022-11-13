const today = new Date();
// console.log(today);
// console.log(today.toDateString());

/******* 날짜와 요일 표시하기 ********/
const displayDate = document.querySelector('#today');

const year = today.getFullYear();    // 연도
const month = today.getMonth() + 1;   // 월(0~11) + 1
const date = today.getDate();  // 날짜
const day1 = today.getDay();  // 요일 (0~6)

let day2 = " ";   // 요일명을 저장할 변수

// 반환된 요일(숫자)을 체크해서 요일명 지정
switch(day1) {
  case 0 : 
    day2 = "일요일"; break;
  case 1 :  
    day2 = "월요일"; break;
  case 2 : 
    day2 = "화요일"; break;
  case 3 : 
    day2 = "수요일"; break;
  case 4 : 
    day2 = "목요일"; break;
  case 5 : 
    day2 = "금요일"; break;
  case 6 : 
    day2 = "토요일"; break;
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day2}</span>`;

/******* 시간 표시하기 *******/

// console.log(today.toTimeString());

const displayTime = document.querySelector("#clock");

let clock = () => {
  let current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  
  hrs = (hrs < 10) ? "0" + hrs : hrs;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;

  // console.log(`${period} ${hrs} : ${mins} : ${secs}`);

  displayTime.innerText = `${period}  ${hrs} : ${mins} : ${secs} `;
}

setInterval(clock, 1000);
