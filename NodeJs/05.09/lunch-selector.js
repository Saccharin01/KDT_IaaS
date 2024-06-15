const lunch = [
  ['주니어와퍼', '몬스터와퍼', '스테커 버거', '콰트로치즈와퍼', '와퍼']
  ['치킨마요', '참치마요', '도련님도시락'],
  ['짜장면', '짬뽕', '잡채밥', '유린기'],
  ['쉑쉑버거', '핫도그', '밀크쉐이크', '스모크쉨버거'],
  '쭈꾸미',
  '함박스테이크',
  '마라탕',
  '인생곰탕',
  '돈까스',
  '쌀국수',
  '샤브샤브',
  '분식집',
  '칼국수',
  '콩나물밥',
]


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

getRandomInt(0, array.length);




// function lunchSelector(array) {
//   랜덤을 결정하면 -> 그것이 하나의 인덱스가 되서 -> 배열속 원소값을 선택해주는

//   if(Array.isArray(array) === true)

//   if(배열원소가 배열이라는 것만 알아낸다면) {
//     배열원소 속 배열을 결정해주어야 함
//   }
//   return "어떤 값이 있을예정";
// }



  // todo 랜덤을 결정하면 - > 그것이 하나의 인덱스가 되어서 - > 배열 속 원소값을 선택해주는
  // todo 배열 원소 값이 `배열`이라면 한번 더 돌려야 함


// function lunchbox(array){
//   let a = getRandomInt(0, lunch.length);

//   if(Array.isArray(lunch) === true){
//     let ele = getRandomInt(0, lunch.length);
//     console.log(lunch.array[ele])
//   }

//   console.log(lunch[a])
// }
// lunchbox(lunch)


function lunchbox(array){
  if(Array.isArray(lunch) === true){
    let ele = getRandomInt(0, lunch.length);
    console.log(lunch.array[ele])
  }


  let a = getRandomInt(0, lunch.length);


  console.log(lunch[a])
}
lunchbox(lunch)


