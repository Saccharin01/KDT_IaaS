
let root = document.getElementById(`root`);
let container = document.createElement(`div`);
let dropDown = document.createElement(`div`)
let trigger = document.createElement(`div`);
/** 
 * ! 전역변수
 */

  root.appendChild(container);
  container.appendChild(dropDown)
  dropDown.appendChild(trigger);
  // root.insertBefore(newitem, newitem2)

  container.style.display = `flex`;
  container.style.backgroundColor = `#D9D9D9`;
  container.style.width = `80vw`;
  container.style.height = `90vh`;
  container.className = 'container';


  dropDown.style.width = `90%`;
  dropDown.style.height = `100%`;
  dropDown.style.backgroundColor = '#B0B0B0';
  dropDown.className = 'handler';

  trigger.style.backgroundColor = `#464646`;
  trigger.style.width = `10vw`;
  trigger.style.height = `5vh`;
  trigger.style.margin = `5%`;
  trigger.className = 'trigger';


// console.log(trigger)

// function display(a, b){
//   a.style.display = b
// }

// let somebth = document.querySelector(`.container`);
// console.log(somebth);

// somebth.addEventListener('click', ()=>display(somebth, "none"));


// container.onclick = (e) => {
//   e.target
// }

// console.dir(trigger);

// todo 버전 3 분기

  // container.addEventListener('click',(e)=>{
  //   if(e.target.className !== `trigger`){
  //     return ""
  //   }
  //   else{
  //     container.appendChild(trigger)
  //     dropDown.style.display = 'none'
  //   }
  // }
  //   , false);



/**
 * ! false / ture
 * * 디폴트는 false
 * * 버블링 캡쳐링에서 보통의 경우 버블링을 많이 쓰기도 하고
 * * 그래서인지 default 값이 false이고, 생략도 가능하게 해놨음
 *  */ 




// function mdn(){

//   const ul = document.createElement("ul");
//   document.body.appendChild(ul);

//   const li1 = document.createElement("li");
//   const li2 = document.createElement("li");
//   ul.appendChild(li1);
//   ul.appendChild(li2);

//   function hide(evt) {
//   // e.target은 사용자가 클릭한 <li> 요소를 가리킴
//   // 여기서 e.currentTarget은 부모인 <ul>을 가리킬 것
//   evt.target.style.visibility = "hidden";
//   }

//   // ! 매개변수 hide = li

//   // 목록에 수신기 부착
//   // 각각의 <li>를 클릭할 때 호출됨
//   ul.addEventListener("click", hide, false);

// }





// function display(a, b){
//   a.style.display = b
// }

// let somebth = document.querySelector(`.container`);
// console.log(somebth);

// somebth.addEventListener('click', ()=>display(somebth, "none"));









  // root.style.display = "flex"
  // root.style.justifyContent = "center"
  // root.style.width = "300px"
  // root.style.height = "600px"
  // root.style.backgroundColor = "#B0B0B0"



  // newitem.style.backgroundColor = "#D9D9D9"
  // newitem.style.width = "300px"
  // newitem.style.height = "200px"

  // btn.style.backgroundColor = "#464646"
  // btn.style.width ="100px"
  // btn.style.height = "100px"
  








// const root = document.getElementById(`root`)
// const div = document.createElement(`div`)
// root.appendChild(div)








// let Cdiv = function (a){
//   for(i = 0; i<3; i++){
//     root.createElement(a)
//   }
// }
// Cdiv(div)

// console.log(root)

// for(i = 0; i<3; i++){
//   document.createElement(`div`)
// }
// console.log(root)