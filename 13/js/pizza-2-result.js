const pizza = () => {
  return new Promise((resolve, reject) => {
      resolve("피자를 주문합니다.");
  });
};

const step1 = (message) => {
  console.log(message);
};

pizza().then(result => step1(result));