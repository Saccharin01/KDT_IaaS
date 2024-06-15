const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));



const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  let data = [];
  pokemonData.forEach((element) => {
    if(answer === element) {
      data.push(element);
      readLine.close();
    }
  });
  console.log(data);
  if(data.length === 0) {
    console.log("포켓몬스터가 존재하지 않습니다.");
  } else {
    console.log("포켓몬스터가 존재합니다.");
    fs.writeFileSync('./searData.json', JSON.stringify(data), 'utf8', (err) => {
      if(err) {
        console.log(err);
      }
    });
  }
  readLine.close();
});

//* 리팩토링


// readLine.question("포켓몬스터 이름을 작성해주세요: \n", function tester(answer){
//   let data = [];
//   pokemonData.forEach((element) => {
//     if(answer === element){
//       data = data.push(element);
//       readLine.close();
//     }
//   });
//   console.log(data)
//   if(data.length === 0){
//     console.log("포켓몬이 존재하지 않습니다.")
//   }else{
//     console.log("포켓몬이 존재합니다. \nProcessing....")
//     fs.writeFile(`./searchData.json`, JSON.stringify(data), 'utf-8', (err)=>{
//       if(err){
//         console.log('파일 저장에 실패했습니다.')
//       }else{
//         console.log(`감사합니다. 저장이 완료되었습니다.\nfile name : searchData.json`)
//       }
//     });
//   }
//   tester()
//   readLine.close();
// });

// * forEach 사용구문
// readLine.question("포켓몬스터 이름을 작성해주세요: \n", function(answer){
//   let data = [];
//   pokemonData.array.forEach((element) => {
//     if(answer === element){
//       console.log(`포켓몬스터 이름이 존재합니다.`);
//       readLine.close();
//     }
//   });
//   readLine.close();
// })