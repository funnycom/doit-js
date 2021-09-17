const title = document.querySelector("#title");

title.onclick = () => {
  if(!title.classList.contains("clicked")){
    title.classList.add("clicked");
  } else {
    title.classList.remove("clicked");
  }
}
