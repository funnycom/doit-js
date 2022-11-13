function whatsYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));      
}

function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));      
}

whatsYourFavorite()
.then(displaySubject)  // .then(response => displaySubject(response))
.then (console.log);   // .then (result => console.log(result));