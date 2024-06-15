
function mkElement(){
  let root = document.getElementById(`root`);

  let newitem = document.createElement(`div`);
  let btn = document.createElement(`div`);
  let newitem2 = document.createElement(`div`)

  root.appendChild(newitem2);
  newitem.appendChild(btn);
  newitem2.appendChild(newitem)
  // root.insertBefore(newitem, newitem2)

  newitem2.style.display = `flex`
  newitem2.style.backgroundColor = `#D9D9D9`
  newitem2.style.width = `80vw`
  newitem2.style.height = `90vh`

  newitem.style.width = `90%`
  newitem.style.height = `100%`
  newitem.style.backgroundColor = '#B0B0B0'
  newitem.className = 'container'

  btn.style.backgroundColor = `#464646`
  btn.style.width = `10vw`
  btn.style.height = `5vh`
  btn.style.margin = `5%`
  btn.className = 'button'

console.log(btn)
}


// mkElement()
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