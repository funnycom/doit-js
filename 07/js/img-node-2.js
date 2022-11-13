let button = document.querySelector("button");   // 버튼 가져오기

button.addEventListener("click", () => {
  let newImg = document.createElement("img");       // 새로운 이미지 노드
  let srcNode = document.createAttribute("src");       // 새로운 src 속성 노드 
  srcNode.value = "images/wall.jpg";                 // src 속성에 들어갈 이미지 파일 경로
  newImg.setAttributeNode(srcNode);                      // 이미지 노드에 속성 노드 추가
  document.body.appendChild(newImg);                 // 웹 문서 body에 새 이미지 노드 추가
});