const fs = require('fs');
const { type } = require('os');
const path = require(`path`)
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

// console.log(typeof(data))

// console.log(data.length)
// console.log(typeof(data))
// console.log(path)


function generator(){
  try{
    
      for( let i = 0; i < data.length; i++ ) {
        fs.writeFileSync(`tester/${[i]}${data[i]}.html`, `<h1>${data[i]}</h1>`);
      }
      console.log(`Generator success!`)

  }catch{

    console.log(`Generator error has been occurred!`)
      
  }
}

function degenerator(){
  try{

    for(let i = 0; i < data.length; i++){
      fs.unlink(`tester/${[i]}${data[i]}.html`, (err)=>{})
    }
    console.log(`Degenerator success!`)

  }catch(err){

    console.log(`Degenerator error has been occurred!`)

  }
  
}



// let dir = './tester'
// fs.readdirSync(dir,(err, filelist)=>{
//   console.log(filelist);
// });


// fs.mkdir('./tester')
// console.log(test)
// fs.rmdirSync('./tester')


generator()
// degenerator()
// path.dirname(`container`)
// console.log(dir)
// if(asd){}



// function degenerator(){
//   for(let i = 0; i < data.length; i++){
//     fs.unlink(`${dir}/${[i]}${data[i]}.html`, (suc,err)=>{
//       try{
//         if(suc){
//           console.log(`1`)
//         }
//       }catch(err){
//         console.log(`error has been occured!`)
//       }
//     })
//   }


//*-----------------------------
// function generator(){
//   for( let i = 0; i < data.length; i++ ) {
  
//     fs.writeFileSync(`${[i]}${data[i]}.html`, `<h1>${data[i]}</h1>`);
//     }
//   }
  
  
//   function degenerator(){
//     for(let i = 0; i < data.length; i++){
//       fs.unlink(`${[i]}${data[i]}.html`, (err)=>{
//         console.log(`err!`)
//       })
//     }
//   }
  
  // generator()
  // degenerator()


// for(let i = 0; i < data.length; i++){

//   fs.appendFile(`[i]+data[i].html`, data, (err)=>{
//     console.log(`error!`)
//   })
// }


// let arraydata = Object.entries(data);
// console.log(arraydata);
// // console.log(arraydata.length);
// console.log(typeof(arraydata))
// console.log(arraydata[0][1])

// let arrayToMap





// let arraydata2 = Object.values(data)
// // console.log(arraydata2)
// // console.log(typeof(arraydata2))
// console.log(arraydata2[0])
// console.log(typeof(arraydata2))

// for(let i = 0; i < arraydata2.length; i++){
//   console.log(arraydata2[i])
//   fs.writeFile(`test.html`, arraydata2[i], (err)=>{
//     console.log(err)
//   })
// }
// fs.writeFile(`test.html`, arraydata2, (err)=>{
//   console.log(`!caution`)
// })

// function pokemon(item){
//   for(let i = 0; i < arraydata.length; i++){
//   }
//   let item = arraydata[i][1]
// }
// console.log(pokemon(item))

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