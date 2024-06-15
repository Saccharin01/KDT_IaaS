import { item } from "./data.js"
import { styles } from "./style.js"
import  * as gendiv from "./generator.js"
let root = document.querySelector('#root');

let itemEle = Object.entries(item)

for(let i = 0; i < itemEle.length; i++){

  let makeDiv = document.createElement('div');
  root.appendChild(makeDiv);
  root.children[i].innerHTML = `${itemEle[i][0]}\n${itemEle[i][1]}`;

  // *root Style Sector
    
  let rootStyle = Object.entries(styles.root)

  for(let i = 0; i < rootStyle.length; i++){
    root.style[rootStyle[i][0]] = rootStyle[i][1]
  };


  // *child style sector
   let chibi = document.querySelectorAll(`.element`)
  let childrenStyle = Object.entries(styles.root.children);

    for(let j = 0; j < childrenStyle.length; j++){
      chibi[i].style[childrenStyle[j][0]] = childrenStyle[j][1];
    };


  let highlightselect = document.querySelector('.highlight')
  let highlightST = Object.entries(styles.root.highlight)


  for(let k = 0; k<highlightST.length; k++){
    highlightselect.style[highlightStyle[k][0]] = highlightStyle[k][1]
  }
}
    

// *highlight style sector

// let highlightselect = document.querySelector('.highlight')
// let highlightStyle = Object.entries(styles.root.highlight)
// for(let i = 0; i <highlightStyle.length ; i++){
//   highlightselect.style[highlightStyle[i][0]] = highlightStyle[i][1]
// }
  // * 이벤트 위임 동작부
root.addEventListener(`click`, (e)=>{
  if(e.target.classList == `element`){
    e.target.classList.add(`selected`)
  }else{
    e.target.classList.remove(`selected`)
  }
})

  
  
  // root.addEventListener('click', (e)=>{
  //   let a = e.target
  //   if(a.id !== 'root'){
  //     a.classList.add("red");
  //     a.style.backgroundColor = 'red'
  //     console.log(a)
  //   }
  // })

  // root.addEventListener('click', (e)=>{
  //   let target = e.target
  //   if(target !== root){
  //     target.classList.add('red')
  //     target.style.backgroundColor = 'red'
  //     console.log(target)
  //   }else{
  //    if(target.classList == 'red')
  //   target.classList.remove(`red`)
  //   }
  // })

  
  //* 05.07 문혜림
  // let aiai = true;
  // if(aiai === false){
    //   let button = document.sdlfkj
    //   button.style.backgroundColor=red;
    //   aiai = ture;
    // } else {
      //   button.style.backgroundColor = none;
      // }
      
  //* 05.08
      
      // root.addEventListener('click', (e)=>{
      //   let target = e.target
      //   let vessle;

      //   if(target !== root){
      //     // target.classList.add('highlight')
      //     console.log(target)
      //     highlight(target)
      //   }

      //   function highlight(a){
      //     let active = Object.entries(styles.root.highlight);
      //     if(target.classList == `highlight`){
      //       target.classList.remove(`highlight`)

      //       console.log(1);
      //     }else{
      //       let vessle = a;
      //       target.classList.add(`highlight`);
      //       console.log(2);
      //       for(let i = 0; i < active.length; i++){         // ? 별도의 구동부를 만들어두는 것은 좋은데, 위에 반복문 속에 이 부분을 포함 시킬 수는 없나 
      //         target.style[active[i][0]] = active[i][1]; 
      //       }
      //     }
      //   }
      // })

      // * 05. 09

      // root.addEventListener('click', (e)=>{
      //   let target = e.target
      //   let vessle;

      //   if(target !== root){
      //     // target.classList.add('highlight')
      //     console.log(target)
      //     highlight(target)
      //   }

      //   function highlight(a){
      //     let active = Object.entries(styles.root.highlight);
      //     if(target.classList == `highlight`){
      //       target.classList.remove(`highlight`)

      //       console.log(1);
      //     }else{
      //       let vessle = a;
      //       target.classList.add(`highlight`);
      //       console.log(2);
      //       for(let i = 0; i < active.length; i++){
      //         target.style[active[i][0]] = active[i][1]; 
      //       }
      //     }
      //   }
      // })

      //   let active = Object.entries(styles.root.highlight);
      //   for(let i = 0; i < active.length; i++){
      //   targetVessle.style[active[i][0]] = active[i][1]; 
      // }




  // if(targetVessle.classList == 'highlight'){
  //   targetVessle.classList.remove(`highlight`)
  // }





  // let table = document.getElementById('bagua-table');

  // let selectedTd; 

  // table.onclick = function(event) {
  //   let target = event.target;

  //   while (target != this) {
  //     if (target.tagName == 'TD') {
  //       highlight(target);
  //       return;
  //     }
  //     target = target.parentNode;
  //   }
  // }

  // function highlight(node) {
  //   if (selectedTd) {
  //     selectedTd.classList.remove('highlight');
  //   }
  //   selectedTd = node;
  //   selectedTd.classList.add('highlight');
  // }


  // let styleroot = Object.entries(styles.root);                      // styles의 root를 배열로 변환
  //   for (let i = 0; i < styleroot.length - 2; i++) {          // styles의 root스타일을 적용
  //     root.style[styleroot[i][0]] = styleroot[i][1];
  //   }
    // console.log(styleroot);