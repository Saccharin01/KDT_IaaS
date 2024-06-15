const fs = require(`fs`);
const http = require(`http`);
const today = require(`./module.today`)

// console.log(today())x
const josndata = {
  name: `공욱재`,
  age: 22,
  location: `대전`,
}

let convertJson = JSON.stringify(josndata, null, 2)
const test = fs.writeFile(`${today()} test.json`, convertJson, 'utf-8', function(err){
  if(err){
    console.log(err , `에러가 발생 했습니다.`)
    }
    console.log(`의도한 작업이 잘 이뤄졌습니다.`)
});