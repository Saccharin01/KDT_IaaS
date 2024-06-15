const fs= require("fs");
const rl = require(`readline`);
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

const pokemonData = JSON.parse(fs.readFileSync('./pokemon.json'))

// let pokemonData1 = fs.readFileSync('./pokemon.json', 'utf-8');
// console.log(pokemonData1)

// const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json", "utf8"));
// console.log(pokemonData);

// const convert = JSON.parse(pokemonData); // 요렇게 써서 변수 낭비 싫어서 그냥 위에 한번에 썼음

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
}

const readLine = rl.createInterface(inOut);

readLine.question('포켓몬 이름을 작성해주세요 : \n',function(answer){
  for(let i = 0; i < pokemonData.length; i++){
    // console.log((i+1)+`포켓몬스터 번호`);
    if(answer === pokemonData[i]) {
      console.log(`포켓몬스터 이름이 존재합니다.`)
      readLine.close();
      break;
    }else{
      console.log(`포켓몬 이름이 존재하지 않습니다!`)
      readLine.close();
    }
  }
})



readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  for(let i = 0; i< pokemonData.length; i++) {
    // console.log((i + 1) + "포켓몬스터 번호");
    if(answer === pokemonData[i]) {
      console.log("포켓몬스터 이름이 존재합니다.");
      readLine.close();
      break;
    } else {
      // console.log("포켓몬스터 이름이 존재하지 않습니다.");
      readLine.close();
    }
    
  }
});

