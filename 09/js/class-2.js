const Book = class {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  viewInfo() {
    console.log(`${this.title} - ${this.price}원`);
  }
}

const book1 = new Book("ABCDE", 10000);
book1.viewInfo();

const textBook = class extends Book {
  constructor(title, price, major) {
    Book.call(this, title, price);
    this.major = major;
  }
  buyTextBook() {
    return `${this.major} 전공 서적 구매`;
  }
}

const book2 = new textBook("알고리즘", 5000, "컴퓨터공학");
book2.buyTextBook();
book2.viewInfo();
