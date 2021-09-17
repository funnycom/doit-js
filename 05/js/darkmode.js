const bttn = document.querySelector("button");

function toDark() {
  document.body.style.backgroundColor = "#222";   // 문서의 배경색
  Document.body.style.color = "#eee";   // 문서의 글자색
}

bttn.onclick = toDark;