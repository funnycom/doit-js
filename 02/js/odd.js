let num = parseInt(prompt("숫자를 입력하세요"));
let sum = 0;

for(let i = 1; i <= num; i++) {
  if (i % 2 === 0) 
    continue;
  sum += i;

  document.write(`${i} ----- ${sum}<br>`);
}