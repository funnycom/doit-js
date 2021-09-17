const book1 = {
  title : "웹 표준의 정석",
  pages : 648,  
  buy : function () {
    console.log("이 책을 구입했습니다.");
  }

  // ES6에서는 function 예약어 없이 메서드 정의 가능
  // buy() {
  //   console.log("이 책을 구입했습니다.");
  // }
}

const book2 = {
  title : "점프 투 파이썬",
  pages : 360,
  done : false,
  finish : function () {
    this.done === false ? console.log("읽는 중") : console.log("완독");
  }
}


