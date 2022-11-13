let xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
};

function renderHTML(contents) {
  let output = "";
  for (let content of contents) {
    output += `
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
      <hr>
    `;
  }
  document.getElementById("result").innerHTML = output;
}

// 다음과 같이 forEach문을 사용해도 됩니다.

// function renderHTML(contents) {
//   let output = '';
//   contents.forEach(function (content) {
//     output += `
//       <h2>${content.name}</h2>
//       <ul>
//         <li>전공 : ${content.major}</li>
//         <li>학년 : ${content.grade}</li>
//       </ul>
//       <hr>
//     `;
//   });
//   document.getElementById("result").innerHTML = output;
// }
