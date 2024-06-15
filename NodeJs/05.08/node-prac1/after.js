const http = require(`http`);
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

//!---------------------------------------

// fs.writeFile(`test.html`, idx, (err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log(`protocol activated`)
// })
  
  
//   fs.readFile(`test.html`,`utf-8`,(err, data)=>{
//     if(err){
//       console.log(`error has beed occured`)
//     }
//   })



//   const server = http.createServer((req , res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//     }) 
//     server.listen(3303)


    //!--------------------------------
  
    // fs.writeFile(`test.html`, idx, ()=>{})


    // const server = http.createServer((req , res) => {
    //   res.write(`hi`);
    //   res.end();
    // })

    // server.listen(3303)


    fs.writeFile(`test.html`, idx, ()=>{})

    

    const server = http.createServer((req , res) => {
      fs.readFile(`test.html`,`utf8`,(err, data) => {   // ? (err, d) 에서 d 자리에만 읽은 데이터가 할당되는 이유는???
        if(err === true){
          console.log(`문제가 발생 했습니다.`)
         }
         
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
         
         
      })
    })

    server.listen(3305)