const http = require(`http`)
const fs = require(`fs`)
const htmlTemplate = require(`../../module/Amodule.HTMLtemplate`)

let loaddata = `<form action="/submit" method="post">
<input type="text" name="inputData" placeholder="이름을 입력해주세요">
</form>`

const server = http.createServer((req, res)=>{
  console.log(req.url);
  console.log(req.method);
  if(req.method === `GET`){
    if(req.url === `/`){

      try {

        let data = fs.readFileSync(`./html/index.html`)
        res.writeHead(200, {'content-Type' : 'text/html'})
        res.write(data)
        res.end()
      } catch (error) {
        fs.mkdirSync(`./html`);
        fs.writeFileSync(`./html/index.html`, htmlTemplate(loaddata))
        let data = fs.readFileSync(`./html/index.html`)
        res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'})
        res.write(data)
        res.end();
        
      }
    }
  }
  if(req.method === `POST`){
    if(req.url === `/submit`){
      let body = ""
      req.on(`data`, ()=>{})
    }

  }  
})

let PORT = 8080
server.listen(PORT, (err)=>{
  if(err){
    console.log(err)
  }
  else{
  console.log(`http://localhost:${PORT}`);
  }
})