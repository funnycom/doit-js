const book1 = {
  title : "웹 표준의 정석",
  pages : 648,  
  buy : function () {
    console.log("이 책을 구입했습니다.");
  }
}

const keys = Object.keys(book1);
console.log(keys);

const values = Object.values(book1);
console.log(values);

const entries = Object.entries(book1);
console.log(entries);



