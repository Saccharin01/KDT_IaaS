const http = require(`http`)
const fs = require(`fs`)

const generate = require(`./writeFile`)
// todo use = generate(filePathName)


for(i = 0; i<5; i++){
  generate(`./public/html/0${i}.html`)
}

// let degenerate = function(){
//     for(i = 0; i<5; i++){
//     fs.unlink(`./public/html/0${i}.html`,(err)=>{
//       if(err){
//       console.log(`err!`)
//       }
//     })
//   }
// }
// degenerate()


const server = http.createServer((req, res)=>{
  if(req.method === `GET`){
    
    function respond(requestURL,fileType, filePathName){


      if(req.url === `${requestURL}`){
        const data = fs.readFileSync(`${filePathName}`);
        res.setHeader(`Content-Type`,`${fileType}`);
        res.statusCode = 200;
        res.write(data);
        res.end()
      }
    }


    respond(`/`,`text/html`, `./public/html/index.html`)
    respond(`/00.html`,`text/html`, `./public/html/00.html`)
    respond(`/01.html`,`text/html`, `./public/html/01.html`)
    respond(`/02.html`,`text/html`, `./public/html/02.html`)
    respond(`/03.html`,`text/html`, `./public/html/03.html`)
    respond(`/04.html`,`text/html`, `./public/html/04.html`)
    respond(`/code.js`,`text/javaScript`,`./public/code.js`)
    respond(`/style.js`,`text/javaScript`,`./public/style.js`)
    respond(`/data.js`,`text/javaScript`,`./public/data.js`)

  }
  console.log(req.url)
})
server.listen(8088);