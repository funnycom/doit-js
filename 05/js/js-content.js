const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");
const pfImage = document.querySelector("#profile img");

title.onclick = () => title.innerText = "프로필";    
userName.onclick = () => userName.innerHTML = `이름 : <b>민들레</b>`;
pfImage.onclick = () => pfImage.src = "images/pf2.png";
