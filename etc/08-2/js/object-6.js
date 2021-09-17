function Member(name, age) {
  this.name = name;
  this.age = age;
}

Member.prototype.addPoint = function(isMember) {
  if (isMember) {
    this.point = 100;
    console.log(`가입 포인트 ${this.point}점을 적립했습니다.`);
  }
}

const bttn = document.querySelector("button");


bttn.addEventListener("click", function() {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const age = document.querySelector("#age").value;

  const member1 = new Member(username, age);

  if (reg_y.checked) member1.addPoint(true);

  console.log(member1);
})









