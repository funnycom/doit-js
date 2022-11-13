function area(r) {
  return Math.PI * r * r;   
}
function circum(r) {
  return 2 * Math.PI * r;
}

const result = document.querySelector("#result");  // 결괏값을 표시할 부분
const radius = prompt("반지름의 크기는? ");

// 반올림하지 않았을 때  
// result.innerText = `
//     반지름 : ${radius},
//     원의 넓이 : ${area(radius)},
//     원의 둘레 : ${circum(radius)}
//   `;

// 소수점 이하 3자리까지 표시
// result.innerText = `
//     반지름 : ${radius},
//     원의 넓이 : ${area(radius).toFixed(3)},
//     원의 둘레 : ${circum(radius).toFixed(3)}
//   `;

// 반올림해서 표시
result.innerText = `
    반지름 : ${radius},
    원의 넓이 : ${Math.round(area(radius))},
    원의 둘레 : ${Math.round(circum(radius).toFixed(3))}
  `;