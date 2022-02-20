function addSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }  
  return sum;
}

const num = 3;
console.log(`1부터 ${num}까지 더하면 : ${addSum(num)}`);  
