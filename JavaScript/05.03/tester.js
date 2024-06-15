
  //   function getOrder(){
  // let orderValue = "으안녕하세요오옷!";
  // console.log(orderValue);
  // if(orderValue === '마지막'){ // ? 변수 orderValue의 값이 데이터 타입을 포함해서 '마지막'과 같으면
  //   return todoItems.length -1; // ? 배열 todoItems의 길이값 -1을 해라
  // } else {
  //     return parseInt(orderValue, 10) // ? 문자열을 정수로 변환해주는 메서드
  //   }
  //   orderValue = parseInt(orderValue, 10)
  //   console.log(orderValue)
  // }
  // getOrder()
  // let tester = getOrder() 
  // console.log(tester)
  
//   function updateView(){
//   root.innerHTML = '';
//   for(let i = 0; i < todoItems.length; i++){
//     let itemElement = document.createElement('p');
//     // ?변수 itemElement에 documenet.createElement('p')를 할당

//     itemElement.textContent = `${todoItems[i]}`;
//     // ? itemElemenet의 텍스트 요소는 todoItems의 인덱스 값 만큼을 가짐
//     root.appendChild(itemElement);
//   }
//   updateSelectOptions(); // !
// }

function updateView(){
  root.innerHTML = '';
  for(let i = 0; i < todoItems.length; i++){
    let itemElement = document.createElement('p');
    // ?변수 itemElement에 documenet.createElement('p')메서드를 할당

    itemElement.textContent = `${todoItems[i]}`;
    // ? itemElemenet의 텍스트 요소는 todoItems의 인덱스 값 만큼을 가짐
    root.appendChild(itemElement);
    console.log(itemElement)
  }
}
updateView()