function addSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }  
  return sum;
}

var num = 3;
console.log(`1부터 ${num}까지 더하면 : ${addSum(num)}`);  
