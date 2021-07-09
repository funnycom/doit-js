let userNumber = prompt("숫자를 입력하세요");

if ( userNumber !== null) {
  userNumber = parseInt(userNumber);  // null이 아니라면 정수로 변환
  if( userNumber % 2 === 0) {
    document.write(`${userNumber} : 짝수`);
  } else {
    document.write(`${userNumber} : 홀수`);
  }
} 