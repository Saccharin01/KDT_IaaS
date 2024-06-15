let a = document.getElementById('wrap')

// console.log(wrap.children[3])
// // // 03
// console.log(a.children[0])


// a.children[1].style.color="red"
// a.children[2].style.border="1px solid black"
// a.children[3].style.backroundColor="orange"


for(i=0; i<a.length; i++){
  console.log(i)
  if(i==0){
    a.children[0].style.color = "red"
  }
}
/**
 * 반복문 (i는 a의 index값){
 * 만일 i가 0이라면(데이터 타입 상관 없이)
 * a의 자식요소 0번째의 스타일에 색을 대입해줘 "빨강으로"
 * }
*/



// a.children[0].style.color = "blue"

// a.children[0].style.color = "red"