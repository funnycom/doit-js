const number = parseInt(prompt("원하는 숫자는?"));
let result = 1;

if( number !== 0 ) {
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  document.write(`1부터 ${number}까지의 곱 : ${result}`);
}
