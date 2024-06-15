// ? setTimeout(callback, delayTimeMs);
//* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// *스탑워치 함수 (하고 싶은 것 , 기다려야 하는 시간(밀리세컨드));


// setTimeout(function(){
//   console.log(`고양이가 걸어다닙니다.`)
// }, 3000)
// setTimeout(function(){
//   console.log(`강아지가 걸어다닙니다.`)
// }, 3000)
// setTimeout(function(){
//   console.log(`친칠라가 걸어다닙니다.`)
// }, 3000)


// setTimeout(function(){
//   console.log(`1. 고양이가 걸어다닙니다.`)
// }, 3000)
// setTimeout(function(){
//   console.log(`2. 강아지가 걸어다닙니다.`)
// }, 2000)
// setTimeout(function(){
//   console.log(`3. 친칠라가 걸어다닙니다.`)
// }, 1000)



setTimeout(function(){
  console.log(`1. 고양이가 걸어다닙니다.`)

  setTimeout(function(){
    console.log(`2. 강아지가 걸어다닙니다.`)

    setTimeout(function(){
      console.log(`3. 친칠라가 걸어다닙니다.`)

    }, 1000)

  }, 2000)
  
}, 3000)
