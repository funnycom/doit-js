const save = document.querySelector("#save");

save.addEventListener("click", (e) => {
  e.preventDefault();

  const myList = document.querySelector("table");
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const puDate = document.querySelector("#pu-date");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${title.value}</td>
    <td>${author.value}</td>
    <td>${puDate.value}</td>
    <td><span id="done">완독</span><span id="del">삭제</span></td>
  `;
  myList.appendChild(row);    

  title.value = "";
  author.value = "";
  puDate.value = "";

  // 완독하면 취소선 긋기 --  여기서부터 안됨 ㅠㅠ

  const rows = document.querySelectorAll("tr:not(:first-child)");
  const done = document.querySelector("#done");
  const del = document.querySelector("#del");

  for (let row of rows) {
    done.addEventListener("click", (e) => {      
      e.target.parentNode.parentNode.classList.add("done");
    });

    del.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    })
  }

  // 목록에서 제거하기


  for(let row of rows) {}

});




