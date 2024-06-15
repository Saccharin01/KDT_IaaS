const http = require(`http`);
// console.log(http);
// console.table(http);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
  <html>
    <body>
      <h1>hello, World</h1>
    </body>
  </html>`)
    
});

server.listen(8000);

/**
 * ? 요청과 응답을 어떻게 처리 할 것인지?
 * * 무슨 기능을 넣을것인지 
 * * 문서를 전송할것인가?
 * * 데이터를 전송할 것인가?
 * 
 */