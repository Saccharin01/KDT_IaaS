const http = require(`http`);
const fs = require(`fs`);
const qs = require(`node:querystring`);
const content = "test"
const htmlTemplate = require(`./template`)

const test1 = htmlTemplate.object(content)
// console.log(test1)
// console.log(htmlTemplate.object(content))
// console.log(htmlTemplate)
// console.log(htmlTemplate.object)
// console.log(htmlTemplate.object(`${content}`))



// let conten = `sumthing`
// const vessle = htmlTemplate.object(conten)

// console.log(vessle)


// console.log(templateHTML(`asdf`))
const server = http.createServer((req, res)=>{
  if(req.method === `GET`){
    if(req.url === `/`){

      const data = fs.readFileSync(`./public/index.html`,`utf-8`);
      res.writeHead(200,{
        'content-Type': `text/html`
      });
      res.write(data)
      res.end();
    }

    if(req.url.startsWith(`/test`)){
      const inputData = req.url.split(`?`)[1];
      const data = qs.decode(inputData); 
      // console.log(data); // ? 객체 화 된 데이터 (name : `123`)
      console.log(data.name)
      console.log(data.file)
      // console.log(inputData)
      // }

      if(inputData){
        
//         const temlpate =`<!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <div id="root">
//   ${data.file}
//   </div>
//   <script type = "module" src="./code.js"></script>
// </body>
// </html>`

        // console.log(temlpate)
        // console.log(templateHTML.HTML)
        fs.writeFileSync(`./public/${data.name}.html`,htmlTemplate.object(`${data.file}`),`utf-8`)
        const madeData = fs.readFileSync(`./public/${data.name}.html`,`utf-8`)
        res.write(madeData);
        res.end()





        // let content = data.file
        // console.log(test)

        // let content = data.file 
        // console.log(`성공해써!`)
        // let content = templateHTML(`${data.file}`)
        // fs.writeFileSync(`./public/${data.name}.html`,test,`utf-8`)
        // const madeData = fs.readFileSync(`./public/${data.name}.html`,`utf-8`)






        // res.write(madeData)
        // res.end()
      }
    }
  }

  // console.log(req.url)
})
const PORT = 8080;
server.listen(PORT, (err)=>{
  if(err){
    console.log(err)
  }
  console.log(`running!`)
  console.log(`http://localhost:${PORT}`);
});