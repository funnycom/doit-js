const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "자바스크립트", "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const subjects = [...member1, ...member2, ...member3];
// console.log(subjects);

const resultList = new Set();
subjects.forEach(subject => {
  resultList.add(subject);
});
// console.log(resultList);

const result = document.querySelector("#result");
result.innerHTML = `
  <ul>
  ${[...resultList]
  .map(subject => `<li>${subject}</li>`)
  .join("")}
  </ul>
`;
// 아래와 같이 한 줄로 작성 가능
// result.innerHTML = `<ul>${[...resultList].map( subject => `<li>${subject}</li>`).join("")}</ul>`;
