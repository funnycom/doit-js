class Lecture {
  constructor(hasTutor, lectID, members) {
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
  }
}

function getStudents(classRoom) {
  let {hasTutor, lectID, members} = classRoom;
  let tutor, students;
  hasTutor ? [tutor,...students] = members : [...students] = members; 
  return students;
}

let class1 = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]);
let class2 = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);

console.log(`강의 : ${class1.lectID}, 수강생 : ${getStudents(class1)}`);
console.log(`강의 : ${class2.lectID}, 수강생 : ${getStudents(class2)}`);