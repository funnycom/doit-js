//  practice\09_04
// Use an event listener and CSS to draw a hightlight around the entire grid when you hover over it with your mouse.
// Add an event listener to each grid cell to hightlight that cell when you hover your mouse over it.
// Add an event listener to each grid cell to change its background color when it is clicked.
// Add an event listener to specific key on the keyboard to change the background color of the whole page, from dark to light and back again.

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseover", () => {
  gridContainer.style.outline = "6px solid red";
});
gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

const gridCell = document.querySelectorAll(".cell");
gridCell.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.outline = "2px solid #ccc";
  });
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });
  cell.addEventListener("click", () => {
    if(cell.style.backgroundColor)
      cell.style.backgroundColor = "";
    else 
      cell.style.backgroundColor = `#${(randColor())}`;
  });
});

const body = document.body;
body.addEventListener("keydown", (e) => {
  if(e.code === "KeyD")
    body.style.backgroundColor = "#222";
  else 
    body.style.backgroundColor = "";
});