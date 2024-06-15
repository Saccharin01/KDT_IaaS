const lunch = [
  ['주니어와퍼', '몬스터와퍼', '스테커 버거', '콰트로치즈와퍼', '와퍼'],
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

// getRandomInt(0, array.length);

// function lunchSelector(array) {
//   const firstGetRandomIndex = getRandomInt(0, array.length);
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[firstGetRandomIndex])) {
//       const randomIndex = getRandomInt(0, array[i].length);
//       for (let j = 0; j < array[i].length; j++) {
//         return array[firstGetRandomIndex][randomIndex];
//       }
//       return array[randomIndex];
//     }
//   }
//   return array[firstGetRandomIndex];
// }
// console.log(lunchSelector(lunch));

function lunchSelector(array) {
  const firstGetRandomIndex = getRandomInt(0, array.length);

  // todo lunchselector(array)의 인자로 배열 lunch가 할당

  // todo 0에서 array.length사이의 랜덤한 숫자를 firstGetRandomIndex에 할당
  for (let i = 0; i < array.length; i++) {
  // todo i는 0부터 lunch.length 사이의 정수 값을 가짐

    if (Array.isArray(array[firstGetRandomIndex])) {
      const randomIndex = (0, array[i].length);
      // todo 만일 배열 lunch의 [설정한 범위 내의 랜덤한 숫자] 요소 가 배열이 맞다면
      // todo randonIndex에는 
      for (let j = 0; j < array[i].length; j++) {
        return array[firstGetRandomIndex][randomIndex];
      }
      return array[randomIndex];
    }
  }
  return array[firstGetRandomIndex];
}
console.log(lunchSelector(lunch));