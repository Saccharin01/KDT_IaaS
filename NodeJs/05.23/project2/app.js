const fs = require("fs");
const rl = require(`readline`);
const htmlTemplate = require(`../../module/module.HTMLtemplate`)
// console.dir(rl);


let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
}

const readLine = rl.createInterface(inOut);

// readLine.question("당신의 이름은 무엇입니까?",
//   function(answer){
//     console.log('your answer is:', answer)
//     readLine.close();
// });

readLine.question(`제가 좋아하는 동물이 뭔지 맞춰보십쇼.`,(answer)=>{
  if(answer === "고양이"){
    readLine.question(`어떤 고양이를 좋아합니까? \n`,(answer)=>{
      if(!answer){
        readLine.question(`입력하시라니까요?`, answer())
      };
    })
  }else{
    console.log('그거 아뉜뒈')
    readLine.close();
  }
})

// readLine.question(`만들고 싶은 html 파일 이름이 무엇인가요?`, fu)

let a = (callback)=>{
  callback()
}


// readLine.question('안녕하세요' , (a1)=>{
//   a1 === "ㅎㅇ" || a1 === "안녕" || a1 === "그래" ? 
//   a(()=>{
//     readLine.question('?', (a2)=>{
//       a2 === "ㅎㅇ" || a2 === "안녕" || a3 === "그래"?
//       a(()=>{
//         readLine.close()
//       }):
//       a(()=>{})
//     })
//   }):
//   a(()=>{
//     readLine.question('대답', (a4)=>{

//     })
//   })


// })