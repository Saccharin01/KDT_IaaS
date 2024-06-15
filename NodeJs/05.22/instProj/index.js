let root = document.getElementById(`root`)

for(let i = 0; i < 2; i++){
  let div = document.createElement(`div`)
  root.appendChild(div)
}

let aniElement = root.querySelector(`div`)
let button = root.children[1]

root.style.height = `95vh`
root.style.width = `95vw`
root.style.backgroundColor = `bisque`
// console.log(button2)


aniElement.style.backgroundColor = "#ea80fc"
aniElement.style.position = 'absolute'
aniElement.style.zIndex = `2`
aniElement.innerText = "Animation Element"
aniElement.style.height = `400px`
aniElement.style.width = `400px`
aniElement.style.top = `300px`
aniElement.style.left = `300px`


button.style.backgroundColor = `#ec407a`
button.style.width = `100px`
button.style.height = `100px`
button.innerText = `button`
button.style.display = 'flex'
button.style.justifyContent = `center`
button.style.alignItems = `center`

let counter = 0;
let counter2 = 20;
let condition = true;
const animation = function(){


  setTimeout(()=>{
    // console.log(`${counter}vw`)
    if(condition){
      console.log(`aniElement.style.left = ${counter}vw`);
      if(counter < 30){
  
        aniElement.style.left = `${counter}`+`vw`
        counter++;
        animation()
      }else if(counter2 < 60){
        aniElement.style.top = `${counter2}`+`vh`
        counter2++;
        animation()
      }else{
        console.log(`break!`)
      }
    }
  },7)



}






button.addEventListener(`click`,animation)






// const animation = function(){
//   setTimeout(()=>{
//     // console.log(`${counter}vw`)
//     console.log(`aniElement.style.left = ${counter}vw`);
//     if(counter < 30){
//       aniElement.style.left = `${counter}`+`vw`
//       counter++;
//       animation()
      


//       // if(counter > 29){
//       //   console.log(`aniElement.style.left = ${counter2}vh`);
//       //   aniElement.style.top = `${counter2}`+`vh`
//       //   counter2++
//       //   //  animation()
//       // }
//     // }else if(counter === 29){
//     //   console.log(`aniElement.style.left = ${counter2}vh`);
//     //     aniElement.style.top = `${counter2}`+`vh`
//     //     counter2++
//     }else{
//       console.log(`aniElement.style.left = ${counter2}vh`);
//         aniElement.style.top = `${counter2}`+`vh`
//         counter2++
//         animation()
//       // console.log(`break!!!!!`)
//     }






//     // }else{
//     //   console.log(`break!!!!!`)
//     // }



    
//   },7)
// }

// button.addEventListener(`click`,animation)