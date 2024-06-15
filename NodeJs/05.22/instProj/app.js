let fromdata = {
  a: "1. 꽁꽁얼어붙은",
  b: "2. 갑천 위로",
  c: "3. 고양이가 걸어다닙니다."
}

function a(){
  console.log(fromdata.a);
}
function b(){
  console.log(fromdata.b);
}
function c(){
  console.log(fromdata.c);
}

a();
b();
c();
console.log(`=======줄바꿈 라인=======`)
c();
a();
b();
console.log(`===========setTimeout=========`)
setTimeout(function() {
  console.log(`4. 고양이가 날라다닌다는데요?`)
},2000)
c();
b();
a();



