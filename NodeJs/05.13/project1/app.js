const http = require(`http`);
const pokemon = require(`pokemon`)
const fs = require(`fs`)

const server = http.createServer(function(req, res){
  if(req.method === `GET`){
    if(req.url === `/`){
      res.statusCode = 200;
      res.setHeader(`content-type`, `text/html; charset=utf-8`);
      const first = fs.readFileSync('./public/index.html',`utf-8`);
      res.write(first)
      res.end()
    }
    if(req.url === `/style.css`){
      const second = fs.readFileSync('./public/style.css');
      res.statusCode = 200;
      res.setHeader(`content-type`, `text/css; charset=utf-8`);
      res.write(second);
      res.end();
    }
    if(req.url === `/index.js`){
      const third = fs.readFileSync(`./public/index.js`);
      res.statusCode = 200;
      res.setHeader(`content-type`, `text/javaScritp`);
      res.write(third);
      res.end();
    }
    if(req.url === `/minam.html`){
      const forth = fs.readFileSync(`./public/minam.html`);
      res.statusCode = 200;
      res.setHeader(`content-type`, `text/html`)
      res.write(forth);
      res.end()
    }
    if(req.url === `/index.html`){
      const mainPage = fs.readFileSync(`./public/index.html`);
      res.statusCode = 200;
      res.setHeader(`content-type`,`text/html`);
      res.write(mainPage);
      res.end()
    }
    console.log(req.url)
  }
});

server.listen(3040);


