const myNumber = 10;

function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log(sum);
let sum = 100;    // let 변수는 재선언 불가능, 재할당 가능
myNumber = 20;    // const 변수는 재할당 불가능
console.log(sum);