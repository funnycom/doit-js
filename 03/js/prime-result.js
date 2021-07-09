const number = parseInt(prompt("자연수를 입력하세요"));
let isPrime = true;

if (number === 1)
  document.write(`1은 소수도 합성수도 아닙니다.`);
else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    document.write(`${number}는 소수입니다.`);
  } else {
    document.write(`${number}는 소수가 아닙니다.`);
  }
}