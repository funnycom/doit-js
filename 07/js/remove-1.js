const title = document.querySelector("h1");

title.addEventLisener("click", () => {
  title.remove();
});