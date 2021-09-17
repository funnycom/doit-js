function addNum(...numbers) {
  let sum = 0;

  for (let number of numbers) 
    sum += number;

  return sum;
}

document.write(addNum(1, 3));
document.write("<br>");
document.write(addNum(1, 3, 5, 7));