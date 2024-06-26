const items = [
  {name : "콜라" , stock : 5},
  {name : "사이다" , stock : 0},
  {name : "물" , stock : 10},
  {name : "쥬스" , stock : 0}
]

//todo 재고가 하나라도 남아있는지 확인해주세요
const hasStock = items.someMethod((elemenet)=>{return elemenet.stock > 0;})