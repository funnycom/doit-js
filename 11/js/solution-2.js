const result = document.querySelector('#result');
const button = document.querySelector('button');

const luckyNumber = {
  digitCount: 6, // 숫자 6개
  maxNumber: 45, // 최대 숫자 45
};

button.addEventListener("click", () => {
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set(); // 숫자가 중복되지 않게 저장할 Set 생성
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  result.innerText = `${[...myNumber]}`;  // Set을 Array로 변환
});