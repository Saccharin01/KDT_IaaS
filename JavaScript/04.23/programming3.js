


var root = window.document.getElementById('root');
// ? html은 객체(Object)덩어리이므로 ,객체를 조회    



window.console.log(root); // *문서에서 id(root)를 근거로 식별한 요소를 변수 root에 할당
window.console.dir(root); // * 객체 root의 속성을 출력(수 많은 속성, property들이 출력)
window.console.log(root.children); // * 속성 중에 children , html에서 수 없이 확인했던 '자식요소'에 접근

window.console.log(root.childNodes); // * 
window.console.log(root.childElementCount); //* root의 자식요소의 갯수

// todo html은 {객체}이면서도, 묶어서 확인하면 [배열]처럼 처리

for (var i = 0; i < root.children.length; i++){
  window.console.log(root.children[i]);
}   // * 자식 요소(root.children)를 순차적[i]으로 출력(console.log)

// todo CSS를 사용하지 않고, 스크립팅으로 스타일 '명령'

root.style.display = "flex"; // * root 객체의 style 속성에 display 속성을 추가하고 flex값을 할당
root.style.flexDirection = 'column'; //* root 객체의 style속성에 flexDirection 속성을 추가하고, column 값을 할당.

// //* 동적 할당 방식으로 root라는 객체의 style이라는 속성안에 속성을 추가하고 값을 할당...?

root.style.aliginItems = 'center';
root.style.justifyContent = 'center';