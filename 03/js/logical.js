const num1 = parseInt(prompt("첫 번째 양의 정수 :"));
const num2 = parseInt(prompt("두 번째 양의 정수 :"));

if (num1 % 2 === 0 && num2 % 2 === 0) {
    document.write(`두 수 모두 짝수입니다.`);
} else {
    document.write(`짝수가 아닌 수가 있습니다.`)
}