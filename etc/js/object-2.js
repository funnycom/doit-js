function Book(title, author, done = false) {
  this.title = title;
  this.author = author;
  this.done = done;
  this.finished = function () {
    this.done = true;    
  }
}

book1 = new Book("웹 표준의 정석", "고경희", false);
book2 = new Book("점프 투 파이썬", "박응용");
