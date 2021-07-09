function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

document.write(`${multiple(5, 10, 20)}<br>`);  // a=5, b=10, c=20
document.write(`${multiple(10, 20)}<br>`);  // a=10, b=20, c=10(default)
document.write(`${multiple(10)}`);  // a=10, b=5(default), c=10(default)