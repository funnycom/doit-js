const factor = 5;

function calc() {  
  return num * factor;   // num 변수에 접근할 수 없음
}
{
  const num = 10;  
  let result = calc();
  console.log(`result : ${result} `);
}