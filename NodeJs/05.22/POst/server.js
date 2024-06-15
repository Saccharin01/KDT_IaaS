const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url')
const server = http.createServer((req, res) => {
  const _url =req.url
  const pathname = url.parse(_url,true).pathname
  const queryData = url.parse(_url,true).query
  if (pathname === '/') {
    if(queryData.id===undefined){
      const html = fs.readFileSync('index.html');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(html);
      res.end();
    }    
}else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
          console.log(req.url)
        });
        req.on('end', () => {
            const parsedBody = querystring.parse(body);
            const { name, content } = parsedBody;
            console.log(`name: ${name}, Message: ${content}`);
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(`Received the data! a: ${name}, b: ${content}`);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
    console.log(req.url)
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});