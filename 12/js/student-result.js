let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200 ) {
    let students = JSON.parse(xhr.responseText);
    document.getElementById("result").innerHTML = `
      <h1>${students.name}</h1>
      <ul><li>전공 : ${students.major}</li><li>학년 : ${students.grade}</li></ul>
     `;
  }
}