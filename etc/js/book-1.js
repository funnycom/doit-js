const webStandard = { 
  title : "웹 표준의 정석",  
  author : "고경희",    
  pages : 648, 
  viewDetail : function() {
    window.open('http://www.easyspub.co.kr/20_Menu/BookView/A001/421/PUB', target="_blank"); 
  }
}

const coverImage = document.querySelector("#bookImage > img");
const bookDesc = document.querySelector("#bookDesc");

bookDesc.innerHTML =`
  <li>제목 : ${webStandard.title}</li>
  <li>저자 : ${webStandard.author}</li>
  <li>쪽수 : ${webStandard.pages}쪽</li>
`;

coverImage.addEventListener("click", function() {
  webStandard.viewDetail()
});