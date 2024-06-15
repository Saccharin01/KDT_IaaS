const http = require(`http`)
const fs = require(`fs`)
const htmlTemplate = require('./module.HTMLtemplate')

const server = http.createServer((req, res)=>{
  console.log(req.method)
  console.log(req.url)
  if(req.method === 'GET'){
    if(req.url === '/'){
      try {
        const data = fs.readFileSync('./public/index.html')
        res.writeHead(200, {
          'content-Type': 'text/html',
        })
        res.write(data);
        res.end();
        
      } catch (error) {
        fs.writeFileSync('./public/index.html', htmlTemplate())
        const data = fs.readFileSync('./public/index/html')
        res.writeHead(200, {
          'content-Type': 'text/html',
        })
        res.write(data);
        res.end();
      }
    } else if(req.method === 'POST') {
      if(req.url === '/submit'){}
    }
  };


})