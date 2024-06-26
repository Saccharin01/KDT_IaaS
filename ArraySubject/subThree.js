const items = [
  {name : "콜라", stock :5},
  {name : "사이다", stock :0},
  {name : "물", stock :10},
  {name : "쥬스", stock :2}
]

// todo 재고가 많은 순서대로 상품을 정렬하세요.

const sortItems = items.someMethod((a,b)=>{return b.stock - a.stock;})