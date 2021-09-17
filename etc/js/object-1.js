const book1 = {
  title : "웹 표준의 정석",
  author : "고경희",
  done : false,
  finished : function () {
    this.done = true;
    alert("정독 완료")
  }
}