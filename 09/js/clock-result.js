const displayTime = document.querySelector("#clock");

let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let time = `${hrs} : ${mins} : ${secs}`;
  
  // console.log(time);

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  
  hrs = (hrs < 10) ? "0" + hrs : hrs;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;

  // time = `${hrs} : ${mins} : ${secs}  ${period}`;
  // console.log(time);

  displayTime.innerText = `${period}  ${hrs} : ${mins} : ${secs} `;
}

setInterval(clock, 1000);