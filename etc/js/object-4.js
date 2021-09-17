function Student(name, score) {
  this.name = name;
  this.score = score;
  this.isPassed = false;
  this.checkScore = function() {
    if (this.score >= 60) {
      console.log("합격입니다.");
      this.isPassed = true;
    } 
    else console.log("불합격입니다.");
  }
}

const student3 = new Student("도레미", "50");
const student4 = new Student("민들레", "80");
