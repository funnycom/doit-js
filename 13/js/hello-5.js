async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;   
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;      
}

async function init() {
  const fav = await whatsYourFavorite();
  const result = await displaySubject(fav);
  console.log(result);
}

init();