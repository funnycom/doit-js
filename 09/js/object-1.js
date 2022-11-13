const book1 = {
  title : "웹 표준의 정석",
  pages : 648,
  done : true,
  finish : function () {
    this.done = true;
  }
}

const book2 = {
  title : "점프 투 파이썬",
  pages : 360,
  done : false,
  finish : function () {
    this.done = true;
  }
}

const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");

title.innerText = `${book1.title}`;
pages.innerText = `${book1.pages}쪽`;
(book1.done === false) ? status.innerText = "읽는 중" : status.innerText = "완독";

