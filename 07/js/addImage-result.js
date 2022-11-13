const today = new Date();  // 현재 날짜와 시간 정보를 담은 today 객체
const hrs = today.getHours();  // 현재 시간 중 시(hour) 정보 가져오기
const container = document.querySelector("#container");

let newImg = document.createElement("img");
newImg.src = (hrs < 12) ? "images/morning.jpg" : "images/afternoon.jpg";
container.appendChild(newImg);  