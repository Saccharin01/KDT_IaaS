var names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];




for(var index=0; index<5; index++) {
  window.console.log(index)
}
/** 
 * ? 반복할래(
 * ? 초기값 :0;
 * ? 실행조건: index <5;
 * ? 동작 기저 : index + 1)
 */

window.console.log(0)
window.console.log(1)
window.console.log(2)
window.console.log(3)
window.console.log(4)

/** 
 * ? 실제 '작성 되어져 버린' 값 = 리터럴 (literal)값
 * ? 리터럴 값 = 야근의 상징(생 노가다 작업)
 * ? 실제 값
 * ? 개발자가 작성한 '값'
 * ? 변경의 여지가 없는 실제 데이터

*/



for(var index = 5 ; index > 0; index--) {
  window.console.log(index)
}


// for(let i = 0; i < 10; i++) {
//   window.console.log(i*2)
// }

for(let i = 0; i < 10; i++) {


  window.console.log('<li>' + names[names.length-1] + '</li>')
}

for(let i = 0; i < 10; i++) {
  console.log(i*3)
}



/**
 * todo 자판기를 예로 들어서
 * todo 자판기라는 객체 속에
 * todo 상품이라는 key가 있고
 * todo 가격이라는 value를 가진다.
 * todo 이를 동적 할당하시오.
 */
let dispenser = [];
dispenser.key = "1000"

console.log(dispenser)
