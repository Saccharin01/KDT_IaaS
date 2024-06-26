const items = [
  {name : "콜라", stock :5},
  {name : "사이다", stock :0},
  {name : "물", stock :10},
  {name : "쥬스", stock :2}
]

// todo 모든 상품의  총 재고를 계산해주세요
const totalStock = items.someMethod((total,item)=>{return total + item.stock;}, 0)