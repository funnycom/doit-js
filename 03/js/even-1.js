let userNumber = parseInt(prompt("숫자를 입력하세요"));

if( userNumber % 2 === 0) {
  document.write(`${userNumber} : 짝수`);
} else {
  document.write(`${userNumber} : 홀수`);
}