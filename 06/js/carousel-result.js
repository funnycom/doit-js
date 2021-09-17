const container = document.querySelector("#container"); // 캐러셀 영역
const pics = [`pic-1.jpg`, "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];  // 이미지 배열

container.style.backgroundImage = `url(images/${pics[0]})`;  // 첫번째 이미지 기본으로 표시

const arrows = document.querySelectorAll(".arrow");  // 화살표
let i = 0;  // 배열 인덱스

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") {  // 왼쪽 화살표 클릭?
      i--; // 이전 이미지로 이동
      if (i < 0) {  // 첫번째 이미지?
        i = pics.length - 1;  // 맨 마지막 이미지로 이동
      }      
    }
    else if (e.target.id == "right") {  // 오른쪽 화살표 클릭?
      i++;  // 다음 이미지로 이동
      if ( i >= pics.length ) {  // 마지막 이미지?
        i = 0;  // 첫번째 이미지로 이동
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;  // 현재 이미지 표시
  });
});