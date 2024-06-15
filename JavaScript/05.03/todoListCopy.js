let root = document.getElementById('root');
let addButton = document.getElementById('add-button');
let removeButton = document.getElementById('remove-button');
let todoInput = document.getElementById('todo-input');
let orderSelect = document.getElementById('order-select');
let todoItems = []; // 카트리지 같네

function updateSelectOptions(){
  let length = todoItems.length;
  // ? length에는 todoItems.length의 값이 할당되었음
  orderSelect.innerHTML = '';
  // ? orderSelect의 innerHTML의 값은 ''으로 할당되었다
  for(let i = 0; i < length; i++) {
    // ? length의 인덱스 값을 추출 (length 은 todoItems.length로 할당되어있음)
    //? 그럼 그냥 todoItems.length로 써도 되는거 아닌가..?
    let option = document.createElement('option');
    //? option 은 createElemenet메서드 가 할당
    option.value = i;
    option.text = `항목 ${i + 1}`;
    // ? 인덱스 값을 활용하고 있어서 +1을 안 해주면 사람이 읽기에 불편하니까
    orderSelect.appendChild(option);
    // ? 추가 할 위치 특정. order-select id를 가진 요소의 자식으로 집어넣겠다
  }
  let lastOption = document.createElement('option');
  lastOption.value = '마지막';
  //? html 태그의 value 값 = 마지막
  lastOption.text = '마지막';
  //? html 태그에 표현되는 txt = 마지막
  orderSelect.appendChild(lastOption);

}

function updateView(){
  root.innerHTML = '';
  for(let i = 0; i < todoItems.length; i++){
    // ? i는 todoItems의 인덱스 값을 추출
    let itemElement = document.createElement('p');
    // ?변수 itemElement에 documenet.createElement('p')메서드를 할당

    itemElement.textContent = `${todoItems[i]}`;
    // ? itemElemenet의 텍스트 요소는 todoItems의 인덱스 값 만큼을 가짐
    root.appendChild(itemElement);
  }
  updateSelectOptions(); // !
}

function getInputValue() {
  return todoInput.value.trim();
   }

function getOrder(){
  let orderValue = orderSelect.value;
  if(orderValue === '마지막'){ 
    // ? 변수 orderValue의 값이 데이터 타입을 포함해서 '마지막'과 같으면
    return todoItems.length -1; // ? 배열 todoItems의 길이값 -1을 해라
  } else {
      return parseInt(orderValue) // ? 문자열을 정수로 변환해주는 메서드
    }
  }

function addItem(){
  let newItem = getInputValue();
  //  ? 시작과 끝의 공백을 잘라내는 기능
  let order = getOrder(); // ? 함수 getOrder는 정수값을 가지고 있음

  if (newItem !== ""){ // ? newItem 이 공백이 아니면 true
    if (order === todoItems.length-1){ // ? getOrder의 값이 ture값을 통과한 값인지 체크
    //  if(newItem !== "" && order === todoItems.length -1)
      todoItems.push(newItem); // ? todoItems의 맨 끝에 newItem의 값을 붙인다
    } else {
      todoItems.splice(order, 0, newItem); // ? 배열 todoItems의 order번째에 newItem 요소를 추가해라
    }
    updateView();
    todoInput.value = '';
  } else{
    console.error('할 일을 입력해야 합니다.')
  }
}

function removeItem() {
  let order = getOrder();
  if(order >= 0 && order < todoItems.length) {
    // ? order가 0보다 크거나 같고 todoItems.length값 보다 작을 떄
    todoItems.splice(order, 1);

    updateView();
  } else {
    console.error('유효하지 않은 순서입니다.')
  }
}


addButton.addEventListener('click', addItem);
/**
 * ? 이벤트 리스너 생성 변수 addButton에 설정
 * ? 이벤트 핸들러는 addItem()
 * * 클릭 이벤트가 addbutton에 발생하면 additem()을 실행시킴
 */
removeButton.addEventListener('click', removeItem);
/**
 * ? 이벤트 리스너 생성 변수 removeButton에 설정
 * ? 이벤트 핸들러는 removeItem()
 * * 클릭 이벤트가 removebutton에 발생하면 removeitem()을 실행시킴
 */
updateSelectOptions(); // Initalize select options
// ? 선택된 옵션을 '초기화'