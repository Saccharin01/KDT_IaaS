const PETRANIA = {};
const blood = ["darkness", "phantom", "mayhem", "plague", "coventous", "beast"]

// console.log(PETRANIA)

// console.log(PETRANIA[0][0])

for(let i = 0; i<blood.length; i++){
  let ele = ['legionName', 'commander', 'region', 'enemy', 'coventous'];
  let name = blood[i];
  PETRANIA[name] = ele;
}
console.log(PETRANIA);



// console.log(PETRANIA)
  
// console.log(PETRANIA[0])

// console.log(PETRANIA[0][0])
// console.log(PETRANIA[0][0][0])

/**
 * * 반복문 (변수i = 0을 할당; i는PETRANIA.length 보다 작다; i를 증가시켜라 )
 * *만일, PETRANIA의 0번째 배열이 "darkness"와 같다면(데이터 타입 신경 쓰지 않고)
 * * 콘솔에 기록해라 PETRANIA의 0번째 배열을.
 */
  for(let i =0; i<PETRANIA.length; i++){
     for(let idx  = 0 ; idx < PETRANIA[i].length ; idx++){
    
      console.log(PETRANIA[i][idx]);
    // if(PETRANIA[i][idx] == "darkness"){
    //   console.log(PETRANIA[i]);
    // }
  }
}

/**
 * *내가 하고 싶은 것은?
 * ? 변수 PETRANIA의 첫 번째 배열이 darkness이면
 * 
 */