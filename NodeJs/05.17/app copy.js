const memberNames = require(`./name`)
const http = require(`http`)
const fs = require(`fs`)
const qs = require(`node:querystring`)


const server = http.createServer((req, res)=>{
  console.log(req.url);
  console.log(req.method);
 
  if(req.method === `GET`){
    if(req.url === `/`){
      const data = fs.readFileSync(`./public/index.html`);
      res.write(data);
      res.end();
    }
    
    let condition;
    if(req.url.startsWith(`/send`)){
      let inputData = req.url.split(`?`)[1];
      // console.log(inputData)
      let decodeData = qs.decode(inputData);
      let cho = decodeData.username
      console.log(decodeData)
      console.log(decodeData.username)
      console.log(memberNames.includes(`${cho}`))
      // console.log(decodeData);
      // console.log(decodeData.username)
      // console.log(memberNames[0])
      // console.log(typeof(decodeData.username))
      // console.log(someResult)
    //     memberNames.some(()=>{
    //       for(let i = 0; i<memberNames.length; i++){
    //       if(decodeData.username === memberNames[i])
    //     return some
    //     console.log(someResult)
    //     if(someResult){
    //       res.statusCode = 200;
    //       res.end();
    //       console.log(1)
    //     }else{
    //       console.log(2)
    //     };
    //   }
    // })

    // memberNames.some((cho)=>{
    //   for(let i = 0; i<memberNames.length; i++){
    //     if(cho === memberNames[i]){
    //       console.log(cho)
    //     }
    //   }
    // })
  
        // if(memberNames[i] == decodeData.username){
          //   console.log(`there it is!`)
          //   condition = true;
          // }
          // if(decodeData.username !== memberNames[i]){
            //   condition = false;
            // }




            // res.writeHead(200,{'content-Type':`text/html`});
            // res.write(`true`)
            // res.end();
      }
  }
      // console.log(condition)
      // console.log(res)
      // console.log(res.url)
});




// some((fruit) => {fruit === `apple`})

const PORT = 8080;
server.listen(PORT,(err)=>{
  if(err){
    console.log(`Error!`)
  }else{
    console.log(`http://localhost:${PORT}`);
  }
});