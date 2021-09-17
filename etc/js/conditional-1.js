let today = new Date();  // 현재 날짜와 시간 정보를 가져옴
let current = today.getHours();  // 현재 시간(hours) 정보를 가져옴. 0~23

if ( current <= 12) {
  alert("Good Morning!");
} else if ( 12 < current <= 18 ){
  alert("Good Aftertoon!");
} else {
  alert("Good Evening!")
}
