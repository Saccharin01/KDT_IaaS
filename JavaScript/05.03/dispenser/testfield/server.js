const http = require(`http`);
const fs = require(`fs`);

const server = http.createServer((req, res)=>{
  fs.readFile(`./index.html`, `utf8`, (err, data)=>{
    if(err){
      console.log(`에러가 발생 했습니다.`)
    }

    res.writeHead(200, {'content-type': 'text/plane'});
    res.write(data)
    res.end()
  })
})
server.listen(3303)
console.log(`http://localhost:3303/`)
