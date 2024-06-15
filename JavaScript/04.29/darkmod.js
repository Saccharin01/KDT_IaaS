let root = document.getElementById('root');
let white = document.getElementById('white');
let black = document.getElementById('black');

console.log(root);
console.log(white);
console.log(black);



root.style.display = 'flex'
root.style.margin = '0px'
root.style.padding = '0px'



white.innerHTML = "white"
white.style.display = 'flex'
white.style.width = '100vw'
white.style.height = '100vh'
white.style.backgroundColor = 'gray'
white.style.border = '1px solid black'
white.style.alignItems = 'center'
white.style.justifyContent = 'center'


black.innerHTML = "black"
black.style.display = 'flex'
black.style.width = '100vw'
black.style.height = '100vh'
black.style.backgroundColor = 'bisque'
black.style.border = '1px solid black'
black.style.alignItems = 'center'
black.style.justifyContent = 'center'


/** 
* todo White를 클릭하면 사라지게 해줘
* todo Black을 클릭하면 White를 나타나게 해줘
* 
* ! 이벤트!
* * 어떤 일이 일어나는,  (돌발)
* * 유저가 직접 제어 - 상호작용의 시작
* * DOM API Event 메서드를 사용하는 방법을 소개하고자 합니다!
*/

function whiteControl(){
white.style.display = 'none';
}
white.addEventListener('click', whiteControl);

function blackControl(){
white.style.display = 'flex'
}
black.addEventListener('click' , blackControl)
/**
* todo 클릭 이라는 이벤트를 가지고 얼마나 변태같이 인터렉션을 만들 수 있느냐
* 
* todo 진~짜 다크모드 만들어볼텨?
* */


