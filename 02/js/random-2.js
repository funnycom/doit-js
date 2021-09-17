let num = parseInt(prompt("숫자를 입력하세요"));
let randomNum;

randomNum = Math.floor(Math.random() * num + 1);
document.write(`${randomNum}`);