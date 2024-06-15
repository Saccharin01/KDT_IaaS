import { item } from "./data.js"
import { styles } from "./style.js"

let itemEle = Object.entries(item)
let rootStyle = Object.entries(styles.root)
let root = document.querySelector('#root');
let childrenStyle = Object.entries(styles.root.children);


// * root ==============================
for(let i = 0; i < rootStyle.length; i++){  
  root.style[rootStyle[i][0]] = rootStyle[i][1]
};

  // * ==============================
  

  // * root.child==============================
for(let i = 0; i < itemEle.length; i++){
  let makeDiv = document.createElement('div');

  root.appendChild(makeDiv);
  root.children[i].innerHTML = `${itemEle[i][0]}\n${itemEle[i][1]}`;

  for(let j = 0; j < childrenStyle.length; j++){
  root.children[i].style[childrenStyle[j][0]] = childrenStyle[j][1];
  } 
}

// * ==============================



// * Event Control==============================
let isSelected;
root.addEventListener('click', function(e){ // === ()=>{}
  if(e.target !== root){
    if(isSelected){
      isSelected.style.backgroundColor = "#f0f0f0"
      e.target.style.backgroundColor = "red"
      isSelected = e.target
    }else{
      e.target.style.backgroundColor = "red"
      isSelected = e.target
    }
  }
})

//*==============================


// ! ???????????????????????????????????????????????????

// let isSelected;
// root.addEventListener('click', function(e){ // === ()=>{}
//   if(e.target !== root){
//     if(isSelected){
//       isSelected.style.backgroundColor = "#f0f0f0"
//       isSelected = e.target
//       console.log(2)
//       console.log(isSelected)
//       e.target.style.backgroundColor = "red"
//       console.log(this)
//     }else{
//       e.target.style.backgroundColor = "red"
//       console.log(1)
//       isSelected = e.target
//       console.log(isSelected)
//     }
//   }
// })



  //*==============================2차 세이브 포인트
// let isSelected;
// root.addEventListener('click', function(e){ // === ()=>{}
//   if(e.target !== root){
//     if(isSelected){
//       isSelected.style.backgroundColor = "#f0f0f0"
//       isSelected = ""
//       console.log(2)
//       console.log(isSelected)
      
//     }else{
//       e.target.style.backgroundColor = "red"
//       console.log(1)
//       isSelected = e.target
//       console.log(isSelected)
//       } 
//     }
//   })










// * 1차 체크포인트
// root.addEventListener('click', function(e){ // === ()=>{}
//     if(isSelected){
//       isSelected = ""
//       console.log(2)
//       console.log(isSelected)
//       // isSelected.style.backgroundColor = "#f0f0f0"
      
//     }else{
//       e.target.style.backgroundColor = "red"
//       console.log(1)
//       isSelected = e.target
//       console.log(isSelected)
//     }
//   })




// ! --------------------------------------
  // root.onclick = false

  // const rootChildren = [];
  // console.log(root)
  //     for(let i = 0; i < root.children.length; i++){
  //       rootChildren.push(root.children[i]);
      
  //     }

  //     rootChildren.forEach(element => {
  //       element.onclick = () =>{
  //         if(element.style.backgroundColor === 'rgb(240, 240, 240)' ){
  //           console.log(element.style.backgroundColor)
  //           element.style.backgroundColor = `red`;
  //         } else {
  //           element.style.backgroundColor = 'rgb(240, 240, 240)'
  //         }
          
  //       }
  //     });
// ! --------------------------------------
// const names = [`이종수`, `조우식`, `이재영`]

// names.forEach(element => {
//   console.log(element[0])
// });
// ! --------------------------------------


