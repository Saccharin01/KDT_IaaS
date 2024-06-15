import { item } from "./data.js"
import { styles } from "./style.js"

let itemEle = Object.entries(item)
let root = document.querySelector('#root');

for(let i = 0; i < itemEle.length; i++){

  let makeDiv = document.createElement('div');
  root.appendChild(makeDiv);
  root.children[i].innerHTML = `${itemEle[i][0]}\n${itemEle[i][1]}`;
  makeDiv.classList.add(`element`)



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


}


  // * 이벤트 위임 동작부
root.addEventListener(`click`, (e)=>{

  if(e.target.classList == `element`){
    e.target.classList.add(`selected`)
  }
  else{
    e.target.classList.remove(`selected`)
  }
})