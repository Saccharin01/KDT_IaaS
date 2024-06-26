const items = [
  { name: "콜라", price: 1000 },
  { name: "사이다", price: 1200 },
  { name: "물", price: 800 },
  { name: "쥬스", price: 1500 },
];

// todo 상품의 이름과 가격을 배열로 생성하세요

const itemList = items.someMethod((elemenet) => {
  return `${elemenet.name} : ${elemenet.price}원`;
});
