const viewBttn = document.querySelector("#view");
const detail = document.querySelector("#detail");

viewBttn.onclick = function() {
  detail.classList.toggle("hidden");
}