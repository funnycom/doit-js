let counter = 0;

let timer = setInterval(() => { 
  console.log("안녕하세요?")
  counter++;
  if (counter === 5)
    clearInterval(timer);
}, 2000);