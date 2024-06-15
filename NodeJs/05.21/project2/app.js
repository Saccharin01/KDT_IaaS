const fs = require(`fs`);
const http = require(`http`);
const today = require(`./module.today`)

// console.log(today())x
const htmlMarkup = {
  head: {
    title: "json 연습",
  },
  body: {
    header: "메뉴 부분",
    main: "메인 컨텍스트",
    footer: "하단 부분",
  },
}


let convertJson = JSON.stringify(htmlMarkup, null, 2)
const test = fs.writeFile(`htmlMarkup.json`, convertJson, 'utf-8', function(err){
  if(err){
    console.log(err , `에러가 발생 했습니다.`)
    }
    console.log(`의도한 작업이 잘 이뤄졌습니다.`)
});