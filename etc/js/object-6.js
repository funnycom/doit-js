const member = {
  point : 100,
  welcome : function() {
    alert("회원 가입을 축하합니다.")
  }
}

const member1 = {
  name : "Kim",  // 이름
  isMember : true,
}

member1.__prototype__ = member;

console.log(member1.point)
member1.welcome();