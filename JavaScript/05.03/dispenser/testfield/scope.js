// var menuList = document.querySelectorAll('.menu-list');
// // 클릭시 활성화 되는 메뉴를 저장할 용도로 쓰는 전역 변수 하나 만들었음
// var savaingMenu;
// // console.log(menuList);
// function clickMenuHandler(){
//   // if문으로 선언한 전역변수로 조건을 만들어주고 ~일때 실행 될 수 있게 하고 난 후
//   // this 값을 전역 변수에 할당 시켜줬음 선언된 전역 변수만 쓸 시 할당 된 값이 없고
//   // 선언만 했기 때문에 값이 없어서 에러가 뜨기 떄문에 if문으로 조건을 걸어줌으로써
//   // 참 값이 나올시 실행 될 수 있게 설정해줬음
//   if(savaingMenu){
//     savaingMenu.classList.remove('menu-active');
//   }
//   this.classList.add('menu-active');
//   savaingMenu = this;
// };
// for(var i = 0; i < menuList.length; i++){
//   menuList[i].addEventListener('click', clickMenuHandler)
// };


var menuList = document.querySelectorAll('.menu-list');
var savaingMenu;

function clickMenuHandler(){
  if(savaingMenu){
    savaingMenu.classList.remove('menu-active');
  }
  this.classList.add('menu-active');
  savaingMenu = this;
};

for(var i = 0; i < menuList.length; i++){
  menuList[i].addEventListener('click', clickMenuHandler)
};