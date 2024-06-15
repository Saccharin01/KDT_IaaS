const memberNames = require(`./name`)
const htmlTemplate = require(`./module.template`)
const http = require(`http`)
const fs = require(`fs`)
const qs = require(`node:querystring`)

const server = http.createServer((req, res)=>{
  console.log(req.url);
  console.log(req.method);
 
  if(req.method === `GET`){
    if(req.url === `/`){
      try {

        console.log(`항목이 이미 존재합니다.`)
        const data =  fs.readFileSync(`./public/html/index2.html`)
        res.write(data);
        res.end();

      } catch (error) {

        console.log(`디렉토리 생성 및 html문서를 읽어옵니다.`)
        fs.mkdirSync('./public/html')
        fs.writeFileSync('./public/html/index2.html',htmlTemplate(``))
        const data = fs.readFileSync(`./public/html/index2.html`);
        res.write(data);
        res.end();

      }
    }


    if(req.url === '/core.js'){
      console.log(`111222333`)

      res.writeHead(200, {"Content-Type": "text/javaScript"})
      const data = fs.readFileSync('./public/core.js')
      res.write(data)
      console.log(`처리됨`)
      res.end();
    }
    if(req.url.startsWith(`/?`)){0
      let submitData = req.url.split(`?`)[1];
      let decodeData = qs.decode(submitData);
      const inputData = decodeData.username
      // console.log(decodeData)
      // console.log(decodeData.username)
      console.log(inputData)
      // let inputValue = Object.values(decodeData)
      // console.log(inputValue[0])

      let resultData = memberNames.includes(inputData)
      // console.log(memberNames.includes(inputData))



      if(memberNames.includes(inputData)===true){
        console.log(`찐이에욧!!!!`)
        // todo 인풋 데이터와 모듈 데이터 비교 후 모듈 데이터에 인풋 데이터가 존재하니 "존재한다"라는 의미의 데이터를 송신해야 함
        const jsondata = {
          result: `${resultData}`
        }
        const jsondataString = JSON.stringify(jsondata)
        fs.writeFileSync(`./public/data.json`, jsondataString)
        const data = fs.readFileSync(`./public/data.json`)
        // res.write(jsondataString)
        console.log(`설정한 작업이 완료되었습니다. 클라이언트로 정보가 넘어갔습니다`)
        res.end()


      }else{
        const jsondata = {
          result: `${resultData}`
        }
        const jsondataString = JSON.stringify(jsondata)
        console.log(`입력된 값이 잘못 되었습니다.`)
        fs.writeFileSync(`./public/data.json`, jsondataString)
        const data = fs.readFileSync(`./public/data.json`)
        // res.write(jsondataString)
        res.end()
      }


    }
      // fs.mkdirSync('./public/html')

      // fs.writeFileSync('./public/html/index2.html',htmlTemplate(``))

      // const data = fs.readFileSync(`./public/html/index2.html`);

      // res.write(data);
      // res.end();
      // const data = fs.readFileSync(`./public/index.html`);
      // res.write(data);
      // res.end();
  }
});




// some((fruit) => {fruit === `apple`})

const PORT = 8088;
server.listen(PORT,(err)=>{
  if(err){
    console.log(`Error!`)
  }else{
    console.log(`http://localhost:${PORT}`);
  }
});