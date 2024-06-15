// function a(a, b) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments);
// }

// a("엔터", "프라이즈", "uss");

// function b (a, b, callback) {
//   callback(a, b);
// }

// b(1, 2, function(a, b){
  //   console.log(a + b);
  // })
  
  
// function add(a, b){
  //   return a + b;
  // }
  
  
// console.log(b(1, 2, function(a, b){
  //   console.log(a + b);
// }));

/**
 * ? typeof(검사 대상)
 * ? -> 타입이 무엇인지 문자열로 리턴해줌
 * ? 문자열이면 더해주고 숫자면 곱해줘
*/

function b(a, b, callback) {
  callback(a, b);
}

b(1, 2, function(a, b){
  console.log(a*b)
})

b(1, 3, function(){
 if(typeof(1,3) === String){
  return a + b
 }
})




function calcBooha(a, b, callback) {
  callback(a, b);
}

calcBooha(10, 20, function(a, b) {
  let result = a + b;
  console.log(result)
});

calcBooha(10, 20, function(a, b) {
  let result = a - b;
  return result;
});

// const a = function (first) {
//   console.log(first);
// }
// a();
// const b = first => console.log(first);
// b();