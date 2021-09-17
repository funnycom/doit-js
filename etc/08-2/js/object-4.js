class Book {
  constructor(title, pages, done = false) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    this.done === false ? console.log("읽는 중") : console.log("완독");
  }
}

const book1 = new Book("웹 표준의 정석", 648, false);
const book2 = new Book("점프 투 파이썬", 360, true);




