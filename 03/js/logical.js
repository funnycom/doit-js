const num1 = parseInt(prompt("첫번째 양의 정수 : "));
const num2 = parseInt(prompt("두번째 양의 정수 : "));
let str;

// AND 연산. 둘다 true여야 결괏값 true
if (num1 % 2 === 0 && num2 % 2 === 0) {  
  str = "두 수 모두 짝수입니다." ;
} else {
  str = "짝수가 아닌 수가 있습니다.";
}
alert(str);