function calcSum() {
  let sum = 0;
  for(let i = 1; i <= 10; i++) {
    sum += i;
  }
  document.write(`1부터 10까지 더하면 ${sum}`);
}

calcSum();