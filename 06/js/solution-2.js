const bttn = document.getElementById('bttn');
const nav = document.getElementById('nav');

bttn.addEventListener('click', () => { 
  nav.classList.toggle('active');
  bttn.classList.toggle('active');
});