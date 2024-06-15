var menu = document.querySelector('#menu');
var currentMenu = "";

console.log(menu);

menu.addEventListener('click', (e)=>{
  if(currentMenu){
    currentMenu.classList.remove('menu-active');
  }
  e.target.classList.add('menu-active');
  currentMenu = e.target;
});


var menu = document.querySelector('#menu');
var currentMenu = '';

function clickMenuHandler(e){
  if(currentMenu){
    currentMenu.classList.remove('menu-active');
    console.log(1)
  }
  e.target.classList.add('menu-active');
  currentMenu = e.target;
  console.log(2)
};
menu.addEventListener('click', clickMenuHandler);