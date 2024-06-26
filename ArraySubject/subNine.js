const items = [
  {name : "콜라" , stock : 5},
  {name : "사이다" , stock : 0},
  {name : "물" , stock : 10},
  {name : "쥬스" , stock : 2}
]

// todo 모든 상품의 재고가 있는지 파악 해주세요

const allInStock = items.someMethod((elemenet)=>{return elemenet.stock > 0;})