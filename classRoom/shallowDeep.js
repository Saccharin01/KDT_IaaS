const original = [
  { name: "조우식", age: 30 },
  { name: "사카린", age: 4 },
];

const shallow = original.map((ele) => {
  return ele;
});
const deep = original.map((ele) => {
  let result = {
    name: ele.name,
    age: ele.age,
  };
  return result;
});


console.log("원본 배열 : ", original)
console.log("shallow : ", shallow)
console.log("deepCody : ", deep)

original[0].name = "Saccharin"

console.log("변경 후의 결과 값")
console.log("원본 배열 : ", original)
console.log("shallow : ", shallow)
console.log("deepCody : ", deep)