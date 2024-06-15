// ? setInterval(`반복 실행 하고 싶은 것`, `실행 간격`);

let intervalHandler = 0;
let timer = setInterval(() => {
  console.log(`1초`+intervalHandler);
  intervalHandler++;
  if(intervalHandler > 10){
    clearInterval(timer);
  }
},1000)