const checkbox = document.querySelector("#toggle");

checkbox.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});
