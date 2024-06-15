const http = require(`http`);
const fs = require(`fs`);
const qs = require(`node:querystring`);
const htmlTemplate = require(`./template`)
console.log(htmlTemplate)
console.log(htmlTemplate('안녕'))
let userData = [];
// console.log(userData)

const server = http.createServer((req, res)=>{
  console.log(req.url)
  if(req.method === `GET`){
    if(req.url === `/`){

      const data = fs.readFileSync(`./public/./html/index.html`,`utf-8`);
      res.writeHead(200,{'content-Type': `text/html`});
      res.write(data)
      res.end();
      
    }

    if(req.url.startsWith(`/test`)){
      const inputData = req.url.split(`?`)[1];
      const data = qs.decode(inputData); 
      
      userData = data
      
      if(inputData){
        fs.writeFileSync(`./public/${data.name}.html`, htmlTemplate(`${data.file}`), `utf-8`)
        
        const madeData = fs.readFileSync(`./public/${data.name}.html`,`utf-8`)
        res.write(madeData);
        
        console.log(userData)
        console.log(userData[0])
        console.log(userData.file)


        res.end()
      }
    }
  }
  console.log(req.url)
})
server.listen(8080);

// const PORT = 8080;
// server.listen(PORT, (err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log(`running!`)
//   console.log(`http://localhost:${PORT}`);
// });