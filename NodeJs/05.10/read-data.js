const fs = require('fs');
const { type } = require('os');

function loadPokemonNames(path) {
  try {
    if (typeof(path) === "string") {
      const pokemonValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(pokemonValue);
    }
  } catch (error) {
    console.error("에러 내용:", error);
   }
}
const data = loadPokemonNames("./pokemonNames.json");
if(typeof(data) === `array`){
  console.log(`배열임`)
}
console.log(data);


let arraydata = Object.entries(data);
console.log(arraydata);
console.log(arraydata.length);

for(let i = 0; i < arraydata.length; i++){
  console.log(i)
}


// let arraydata = toString(data);
// console.log(arraydata);

// console.log(typeof(arraydata))
// console.log(arraydata[4])
// for(i = 0; i<arraydata.length; i++){
//   console.log(i)
// }


// function Creator(){
  //   try{
    //     if(typeof){}
    
    //   }
    //   catch{}
    // }
    
    // for(let i =0; i<data.length; i++){
    //   console.log(data[i])
    //   fs.writeFile([i].html, data,(err)=>{
    //     console.log(`err[i]`)
    //   })
    // }


// for(let i = 0; i < 8; i++){
// fs.appendFile([i]+`test.html`, data, (err)=>{
//   if(err){
//     throw err
//   }
//   console.log(`protocol activated`)
// })
// }





//*원본============================

// function loadPokemonNames(path) {
//   try {


//     if (typeof(path) === "string") {
//       const pokemonValue = fs.readFileSync(path, 'utf8');
//       // ? 동기 작업이야?

//       return JSON.parse(pokemonValue);
//     } 
//     // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
//     // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘


//   } catch (error) {


//     // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
//     console.error("에러 내용:", error);


//   }
// }