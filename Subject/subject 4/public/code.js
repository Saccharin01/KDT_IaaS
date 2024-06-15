import { style } from './style.js';
import { dataText } from './data.js';
const body = document.querySelector(`body`)
const root = document.getElementById('root')

// * 스타일 시트 아스타리스크
// let absoluteStyle = Object.entries(style['*'])

// for(let i = 0; i<absoluteStyle.length; i++){
//   body.style[absoluteStyle[i][0]] = [absoluteStyle[i][1]] 
// }

// * div Create ===

for(let i = 0; i< 2 ; i++){
let makeDiv = document.createElement('div');
root.appendChild(makeDiv);
}

  for(let i = 0; i < 5; i++){
    let makeDiv = document.createElement(`div`);
    root.firstChild.appendChild(makeDiv)
    makeDiv.innerText = dataText[i]

    makeDiv.onclick = ()=>{
      location.href = `./0${i}.html`
    }
  }


//* HeaderStyle

let headerST = Object.entries(style.header)

for(let i = 0; i<headerST.length; i++){
  root.firstChild.style[headerST[i][0]] = headerST[i][1]
}

//* display Style

let displayST = Object.entries(style.display)

for(let i = 0; i<displayST.length; i++){
  root.lastChild.style[displayST[i][0]] = displayST[i][1]
}



// * btn Style
let btnST = Object.entries(style.button)
let btn = root.firstChild.children

// console.log(btnST.backgroundColor)


// style.backgroundColor.forEach((sum)=>{
//   btn[i].style.backgroundColor = sum
// })

for(let i = 0; i<btn.length; i++){
  for(let j = 0; j < btnST.length; j++){
    btn[i].style[btnST[j][0]] = btnST[j][1];
  }
  btn[i].style.backgroundColor = style.backgroundColor[i]
  btn[i].setAttribute(`type`,`button`)
}


// console.dir(root.firstChild.children)


// root.firstChild.addEventListener(`click`,(e)=>{
//   if(root.firstChild.childNodes){
//     console.log(1)
//     e.target.onclick = () =>{
//       location.href = `naver.com`
//     }
    
//   }
// })