const items = [
  {name : "콜라", stock :5},
  {name : "사이다", stock :0},
  {name : "물", stock :10},
  {name : "쥬스", stock :2}
]



// todo 이름이 "사이다" 인 상품을 찾으세요

const cider = items.someMethod((elemenet)=>{return elemenet.name === "사이다";})