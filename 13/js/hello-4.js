async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;   
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;      
}

whatsYourFavorite()
.then(displaySubject)  // .then(response => displaySubject(response))
.then (console.log);  // .then (result => console.log(result));