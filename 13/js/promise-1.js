let likePizza = true;      // 이 값을 false로 바꿔서도 테스트해 보세요. 
const pizza = new Promise((resolve, reject) => {
  if (likePizza) 
    resolve('피자를 주문합니다.');
  else
    reject('피자를 주문하지 않습니다.');
});


pizza
  .then(
    result => console.log(result)
  )
  .catch(
    err => console.log(err)
  );

// 아래와 같이 작성할 수도 있음  
// pizza.then(
//   result => console.log(result),
//   err => console.log(err)
// );      
