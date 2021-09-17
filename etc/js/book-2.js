function Book(title, author, pages, cover) { 
  this.title = title;
  this.author = author;   
  this.pages = pages;
}

const book1 = new Book("웹 표준의 정석", "고경희", 648);
const book2 = new Book("점프 투 파이썬", "박응용", 360);

const item1 =  document.querySelector("#book1");
const item2 =  document.querySelector("#book2");

const lists = document.querySelectorAll("#bookList > li");
const bookImage = document.querySelector("#bookImage");
const bookDesc = document.querySelector("#bookDesc");

item1.addEventListener("click", function() {
  bookDesc.innerHTML =`
  <li>제목 : ${book1.title}</li>
  <li>저자 : ${book1.author}</li>
  <li>쪽수 : ${book1.pages}쪽</li>
`;
});

