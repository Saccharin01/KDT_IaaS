const http = require(`http`);

let mainDocument = `
  <html lang = 'ko'>
  <head>
  <meta charset="UTF-8">
  </head>
    <body>
      <h1>반갑다!</h1>
    </body>
    <script>
      alert('good day');
    </script>
  </html>`;
  // function testServer (){
    // response.statusCode = 200;

  // }
  // let server = http.createServer(testServer);
  


  let server = http.createServer((request , response)=>{
// ? 왜 createServer 에 넣을 함수에 매개변수를 두 개를 집어넣었지?
// ? 직접 사용하는 매개변수는 response 하나뿐인데..?
    response.statusCode = 200;
    response.setHeader(`content-type`, "text/html");
    response.write(mainDocument);
    response.end();
  });
  
  server.listen(3000, function(){
    console.log("Protocol Activated!");
    console.log(`http://localhost:3000`);
  });