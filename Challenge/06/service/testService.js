const http = require(`http`)
const fs = require(`fs`)
const url = require(`url`)
const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();


xhr.open(`get`, `http://localhost:8088`);
xhr.setRequestHeader(`content-type`, `text.html`);
xhr.responseType = "json"
xhr.send();

xhr.onload = function(){
  let submitData = JSON.parse(xhr.response);
  console.log(`12354`)
  console.log(submitData)
  let parseData = JSON.stringify(submitData, null, 2)
  fs.writeFile(`testElement2.json`, parseData, (err)=>{
    if(err){
      console.log(err)
    }
  })
  // xhr.write(submitData)
}



// * ====legacy
// const server = http.createServer((req, res)=>{
//   // try {
//   //   xhr.open('GET', `/localhost:8088`)
//   //   xhr.setRequestHeader('content-Type', `text/plain`)
//   //   xhr.send();

//   // } catch (error) {
//   //   console.log(error)
//   //   console.log(`request fail`)  
//   // }

//   // // if(req.method === `GET`){
//   // //   if(req.url === `/`){
//   // //     console.log(`connected with test database`)
//   // //   }
//   // // }
//   // console.log(req.url)
//   try {
//     fetch(`http://localhost:8088/`)
//     // .then(console.log(req.url))
//     // .then(console.log(`send!`))
//     .then(console.log(res))
//     .then((res)=>{
//       return res.json();
//     })
//     .then((received)=>{
//       fs.writeFile(`index.html`, received, 'utf8',(err)=>{
//         if(err){
//           console.log(err)
//         }
//       })
//       res.write(received)
//       res.end()
//       console.log(received)
//       // let parseData = JSON.parse(received)
//       // console.log(parseData)
//     })


//     // * save point
//     // .then((res)=>{
//     //   let received = res.json();
//     //   console.log(received);
//     //   let parseData = JSON.parse(received)
//     //   res.write(parseData)
//     //   // res.end()
//     //   // console.log(parseData)
//     // })
//     // // .then((res)=>{res.json()
//     // //   console.log(`caution!! response received!!!`)
//     // //   console.log(res)
//     // //   let parseData = JSON.parse(res)
//     // //   console.log(parseData)
//     // //   fs.writeFileSync('test.txt', parseData)
//     // })
//     .catch(console.log(err))
    
//   } catch (error) {
    
//   }
// })



// let PORT = 8080
// server.listen(`${PORT}`)
// console.log(`server location: http://localhost:${PORT}/`)