const items = [
  {name : "콜라", price : 1000},
  {name : "사이다", price : 1200},
  {name : "물", price : 800},
  {name : "쥬스", price : 1500}
]

// todo 이름과 가격을 키 - 값 쌍으로 가지는 객체를 생성하세요!

const itemObject = items.someMethod((obj, elemenet )=>{
  obj[elemenet.name] = elemenet.price
  return obj
}, {})