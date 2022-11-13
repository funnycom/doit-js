const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown", (e) => {
  result.innerText = `
  code : ${e.code}, 
  key : ${e.key}
  `;
});