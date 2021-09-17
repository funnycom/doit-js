function changeBg() {
  const bgCount = 5;

  let randomNumber = Math.floor(Math.random() * bgCount) + 1;
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
}

document.onload = changeBg();