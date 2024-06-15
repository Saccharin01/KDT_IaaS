const objectloop = require(`./module.objectloop`);
const someData = require(`./module.someData`);


function forObject(a, b){
  try{
    if(typeof(a) === "object") {
      if(typeof(b) === "object") {
        console.log("정상 작동중")
        let values = [];
   
        
        objectloop(values, a);
        objectloop(values, b);

        console.log(values);

        let add = values.reduce((a, b) => {
          return a + b;
        })

        console.log("다 더한 값 : ",add);
      }
    }
  } catch(err) {
    console.log(err);
    console.log("매개변수 타입이 잘못되었습니다아아아아!");
  }
}
console.log(someData)
console.log(someData.a)
console.log(someData.a.first)

forObject(someData.a, someData.b);
