// function changeBg() {
//   const bgCount = 5;

//   let randomNumber = Math.floor(Math.random() * bgCount) + 1;
//   document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
// }

// document.addEventListener("load", changeBg());
// document.onload = changeBg();

window.onload = function () {
  const bgCount = 5;

  let randomNumber = Math.floor(Math.random() * bgCount) + 1;
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
};
