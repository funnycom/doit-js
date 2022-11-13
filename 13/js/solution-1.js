const quotesURL = "http://dummyjson.com/quotes";

fetch(quotesURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // 데이터 구조 파악. 한 번에 가져오는 데이터 갯수 확인
  })
  .catch(error => console.log(error));