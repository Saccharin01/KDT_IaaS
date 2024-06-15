function forObject(a, b){
  try{
    if(typeof(a) === "object") {
      if(typeof(b) === "object") {
        console.log("정상 작동중")
        let values = [];
        for(let key in a){
          console.log(key);
          // values[0] = a[key]; // ? 절차형 (C언어 스러움)
          values.push(a[key]); // ? 선언형 (자스스러운 문법)
          // * values.배열에넣어(a[key]);
        }
        console.log(values)
        for(let key in b){
          values[1] = b[key];
        }
        console.log(values);
        // let add = values[0] + values[1];
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

const a = {first : 1};
const b = {first : 2};

// a.first = 1;
// b.first = 2;

forObject(a, b);
// console.log(a)
// console.log(b)
