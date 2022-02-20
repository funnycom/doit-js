function calcSum() {
  let sum = 0;
  for(let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}입니다.`);
}

calcSum();