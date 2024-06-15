let http = require(`http`)
let fs = require(`fs`)
const htmltemplate = require(`../module/Amodule.HTMLtemplate`)

// fs.writeFile(`index.html`, htmltemplate(``), (err)=>{
//   if(err){
//     console.log(`pause`)
//   }
// })





let server = http.createServer((req, res)=>{
  // const xml = new XMLHttpRequest()
  if(req.method === "GET"){
    console.log(req.method)
    console.log(req.url)
    if(req.url === "/"){
      res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'})
      fs.writeFile(`index.html`, htmltemplate('안녕하세요!!!!!'), (err)=>{
        if(err){
          console.log(`fuck`)
        }else{
         let data = fs.readFile('index.html',(err,data)=>{
          if(err){
            console.log(`readFile error`)
          }else{
            res.write(data)
            console.log(data)
            res.end()
          }
         })
        //  res.write(data);
        }
      // console.log(`${data}`)
      // res.write(data)
      // res.write(`${data}`)
    })


      // res.writeHead(200, {'content-Type': `text/html`})
      // res.write(`<h1>hello world</h1>`)
      // res.end(`Test Phase`)
    }
  }
})

let port = 8080


server.listen(`${port}`)
console.log(`server running on:  http://localhost:${port}`)