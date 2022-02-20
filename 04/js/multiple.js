function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

console.log(multiple(5, 10, 20));  // a=5, b=10, c=20
console.log(multiple(10, 20));  // a=10, b=20, c=10(default)
console.log(multiple(10));  // a=10, b=5(default), c=10(default)