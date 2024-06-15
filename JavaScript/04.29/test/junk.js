  // const root = document.getElementById('root')
    // const header = document.getElementsByClassName('header')
    // const content = document.getElementsByClassName('content')
    // const footer = document.getElementsByClassName('footer')


    // const themeSelect = document.getElementsByClassName('themeSelect')
    // const themeSelect = document.getElementById('themeColor')
    // const html = document.querySelector('*');
    const Select = document.querySelector('select')
    // const body = document.querySelector('.root')
/** 
 * ? 근데 이거 전역변수 아님?
// */
// console.log(body.style)
// console.log(Select)

// console.log(Select[0])

function change(a, b){
  body.style.backgroundColor = a;
  body.style.color = b;
}

Select.onchange = function () {
  Select.value === "black"
    ? change("black", "white")
    : change("white", "black");
};




// function themechange(){
//   if(Select.value === white){
//     Select.addEventListener('change',change())
//     change("black", "white")
//   }
// }
// else{
//   change("black", "white")
// }



/**
 * todo 만일 white가 눌리면 배경색을 흰색, 텍스트 색을 검정으로
 * todo 만일 black가 눌리면 배경색을 검정, 텍스트 색을 흰색으로
*/


// select.onchange = function () {
//     select.value === "black"
//         ? update("black", "white")
//         : update("white", "black");



    // document.body.style.margin = '0px'
    // document.body.style.padding = '0px'









    // console.log(root)
    // console.log(header)
    // console.log(content)
    // console.log(footer)
    
    
// const select = document.querySelector("select");
// const html = document.querySelector("html");
// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }

// select.onchange = function () {
//     select.value === "black"
//         ? update("black", "white")
//         : update("white", "black");
// };










  const Select = document.querySelector('select')
    const body = document.querySelector('body')
/** 
 * ? 근데 이거 전역변수 아님?
// */
// console.log(body.style)
// console.log(Select)

// console.log(Select[0])

function change(){
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
}

addEventListener('change', change);


/**
 * ! 판단 하지 않았음.
 * ! 단순히 값이 변했다는 것만 알아체고 있음
*/

// if(Select.value === "white"){
//   change("white", "black")
// }
// else{
//   change("black", "white")
// }
// console.log(Select.onchange)


// Select.onchange = function () {
//   Select.value === "black"
//     ? change("black", "white")
//     : change("white", "black");
// };







// const select = document.querySelector("select");
// const html = document.querySelector("html");
// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }

// select.onchange = function () {
//     select.value === "black"
//         ? update("black", "white")
//         : update("white", "black");
// };