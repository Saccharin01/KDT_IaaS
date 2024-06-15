const http = require(`http`)
const fs = require(`fs`)

const server = http.createServer((req, res)=>{
  console.log(req.method)
  console.log(req.url)
  if(req.method === `GET`){
    if(req.url === `/`){
      console.log(`connected with test service server`);
      // fs.readFile(`testjson.json`, `utf-8`, (err,data)=>{
      fs.readFile(`index.html`, `utf-8`, (err,data)=>{
        if(err){
          console.log(`error`)
        }else{
          let readdata = JSON.stringify(data, null, 2)
          console.log(readdata)
          console.log(`data sended`)
          console.log(typeof(readdata))
          console.log(res.method)
          res.write(readdata)
          res.end()
          //get으로 들어온 요청에 post의 방법으로 대응하고 있는 것은 아닌지?
        }
      })
    }
  }
})



let PORT = 8088
server.listen(`${PORT}`)
console.log(`server location: http://localhost:${PORT}/`)