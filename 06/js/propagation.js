const elements = document.querySelectorAll('*');  // 모든 요소를 가져와 elements에 저장

 // 모든 요소 순회하면서 click 이벤트 발생했을 때 
 // event.target과 event.currentTarget의 태그명 표시
for (let element of elements) {
  element.addEventListener("click", e => 
    console.log(`event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`)
  );
}

// 아래와 같이 for문을 사용할 수도 있습니다.
// for (let i = 0 ; i < elements.length ; i++) { 
//   elements[i].addEventListener("click", function(e) {   
//     console.log(e.target.tagName);                      
//   });
// }