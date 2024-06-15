let counter = 0;

const timer = function(){
 setTimeout(()=>{
   
   console.log(counter + "vw");
   counter++;
  if(counter < 10){
    timer()
  }else{
    console.log('break End Point')
  }
}, 1);
}

timer()


// console.time("작업!");

// console.time(`첫번째 setTimeout`);
// setTimeout(()=>{
//   console.timeLog(`첫번째 setTimeout`)
//   console.log(`1. 버거킹 무거따!`);
//   console.timeEnd(`첫번째 setTimeout`);
// }, 1000);

// console.time(`두번째 setTimeout`)
// setTimeout(()=>{
//   console.log(`2. 카페인 중독자!`);
//   console.timeEnd(`두번째 setTimeout`)
// }, 1000);

// setTimeout(()=>{
//   console.log(`3. 현대인의 3대 영양소!`);
// }, 1000);

// console.timeEnd("작업!")