function Book (title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function() {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);  
}

function textBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

Object.setPrototypeOf(textBook.prototype, Book.prototype);

textBook.prototype.buyTextBook = function() {
  console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
}

const book1 = new Book("ABCDE", 10000);
book1.buy();
const book2 = new textBook("알고리즘", 5000, "컴퓨터공학");
book2.buyTextBook();
book2.buy();
