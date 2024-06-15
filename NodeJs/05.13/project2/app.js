const http = require(`http`)
const fs = require(`fs`)
const createFile = require(`./writeFile`)


createFile()

const server = http.createServer((req,res)=>{
  if(req.method === `GET`){
    if(req.url === `/`){
      res.statusCode = 200;
      res.setHeader(`content-type`,`text/html`,`utf8`);
      const index = fs.readFileSync(`./public/index.html`);
      res.write(index);
      res.end()
    }

      function jsCall(test2){
        if(req.url === `/${test2}`){
          res.setHeader(`Content-Type`,`text/javaScript`);
          const index = fs.readFileSync(`./public/${test2}`);
          res.statusCode = 200;
          res.write(index);
          res.end()
        }
      }
      jsCall(`code.js`)
      jsCall(`data.js`)
      jsCall(`style.js`)
      jsCall(`Event.js`)
      
  }
  console.log(req.url)
})
server.listen(3060);