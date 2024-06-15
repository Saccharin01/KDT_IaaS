const fs = require(`fs`);
// const { Http2ServerRequest } = require("http2");

// fs.appendFile(`test.txt`, `hello`, (err)=>{
//   if(err){
//     throw err;}
//     console.log(`file has bees saved`)
  
// })


const idx = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Pilot</title>
</head>
<body>
  <h1>Greeting</h1>
  <p>This is the test Pilot which I made with node.js</p>
  <p>It is so difficult to write EACH ELEMENT ON MY HAND :(</p>
</body>
</html>`
const idx2 = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script type = "module" src="./code.js"></script>

</body>
</html>`


// for(let i = 0; i < 8; i++){
// fs.appendFile([i]+`test.html`, data, (err)=>{
//   if(err){
//     throw err
//   }
//   console.log(`protocol activated`)
// })
// }

// * 반복문을 사용해서 여러개의 파일을 만들었음

// fs.appendFile(`test.html`, data, (err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log(`protocol activated`)
// })

fs.appendFile(`test.html`, idx2, (err)=>{
  if(err){
    console.log(err)
  }
  console.log(`protocol activated`)
  
  
  fs.readFile(`test.html`,`utf-8`,(err, data)=>{
    if(err){
      console.log(`error has beed occured`)
    }
  // console.log(data)

  const server = http.createServer((req , res) => {
    res.writeHead(200, {'Content-Type': ''});
    res.write(data);
    res.end();
    })
    server.listen(3303)

})

})
const http = require(`http`);

