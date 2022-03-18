const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

const tail = arr => ( arr.length > 1 ? arr.slice(1) : arr);

// 아래와 같이 선언할 수도 있습니다.
// function tail(arr) {
//   let resultArr;
//   if (arr.length > 1 ) {
//     resultArr = arr.slice(1);
//   } else {
//     resultArr = arr;
//   }
//   return resultArr;
// }

origin.innerText = numbers;
result.innerText = tail(numbers);

