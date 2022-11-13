const email = document.querySelector("#userEmail");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", function() {
  let username, domain;  

  if (email.value !== "") {
    username = email.value.split("@")[0];          // @ 기준으로 쪼개어 앞부분 저장
    username = username.substring(0, 3);           // username 중 3자리만 필요
    domain = email.value.split("@")[1];            // @ 기준으로 쪼개어 뒷부분 저장
    result.innerText = `${username}...@${domain}`;
  }
});


/*************************************************
  @앞에 표시할 username의 갯수를 고정하지 않고
  username 길이의 반만 표시하려고 할 때
**************************************************/  

button.addEventListener("click", function() {
  let username, domain, half;  

  if (email.value !== "") {
    username = email.value.split("@")[0];         // @ 기준으로 쪼개어 앞부분 저장
    half = username.length / 2;                    // username의 길이를 반으로 나눔
    username = username.substring(0, (username.length - half));         // username에서 반으로 나눈 위치까지만 추출
    domain = email.value.split("@")[1];            // @ 기준으로 쪼개어 뒷부분 저장
    result.innerText = `${username}...@${domain}`;  // 결과 표시
    email.value = "";                               // 텍스트 필드 지우기
  }
});