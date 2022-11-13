const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");

title.onclick = () => {
  title.classList.toggle("clicked");  
}
userName.onclick = () => {
  userName.classList.toggle("blue-italic");
}
