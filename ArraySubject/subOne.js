const items = [
  { name: "콜라", stock: 5 },
  { name: "사이다", stock: 0 },
  { name: "물", stock: 10 },
  { name: "쥬스", stock: 0 },
];

//todo 재고가 있는 상품만 나열하도록 수정 해주세요

const availableItem = items.someMethod((elemenet)=>{return elemenet.stock > 0;})