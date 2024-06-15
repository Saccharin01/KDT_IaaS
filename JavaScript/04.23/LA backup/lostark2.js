// const enemy = PETRANIA

// PETRANIA.darkness = commander
// PETRANIA.darkness.commander = "카멘"

// PETRANIA.darkness = {}

// console.log(PETRANIA)

// PETRANIA[darkness] = commander
// PETRANIA.darkness.commander = "카멘"

// console.log(PETRANIA)



// const PETRANIA = {
//   darkness: {
//     legionName: "어둠군단",
//     commander: "카멘",
//     region: "어둠의 바라트론",
//     enemy: ["아크라시아", "페트라니아"],
//     count: "소수 정예"
//   },



// ? legacy

// let PETRANIA = {};


// PETRANIA.darkness = {};
// PETRANIA.darkness.commander = "카멘"
// PETRANIA.darkness.legionName = "어둠군단"
// PETRANIA.darkness.region = "어둠의 바라트론"
// PETRANIA.darkness.enemy = ["아크라시아", "페트라니아"]

// console.log(PETRANIA)

// ? legacy





// * 커다란 객체는 그대로인데, darkness 항목을 바꾸는 법
//* 그 속에 할당된 항목 key는 그대로인데, 그 속에 value를 바꾸는 법.
//! 접근 설계 변경. 객체 가 아니라 배열로

// ! const PETRANIA = []
let PETRANIA = []
console.log(PETRANIA)

// ! 그러면 밑에 얘를, const로 선언을 하고 아래에 console.log를 무조건 찍어놓으면?
PETRANIA = ["darkness", "phantom", "mayhem", "plague", "coventous", "beast"]

console.log(PETRANIA)

console.log(PETRANIA[0][0])
//* 알고 싶었던 것= darkness의  ['legionName', 'commander', 'region', 'enemy', 'coventous'] 이 값.

//* 근데 위에 것은 0번째 배열의 0번째 요소
//*접근식이 잘못됨. 0번째 배열의 자식배열을 알고싶음.


for(i = 0; i<PETRANIA.length; i++){
  let ele = ['legionName', 'commander', 'region', 'enemy', 'coventous']
  PETRANIA[i] = [ele]
};  


console.log(PETRANIA[0][0])
//* 알고 싶었던 것= darkness의  ['legionName', 'commander', 'region', 'enemy', 'coventous'] 이 값.

//* 근데 위에 것은 0번째 배열의 0번째 요소
//*접근식이 잘못됨. 0번째 배열의 자식배열을 알고싶음.
// ! 야 이거 왜 되냐?
// todo 60번 줄에 찍은 콘솔은 함수를 통해서 자식 값을 받기 전
// todo 73번째 줄에 찍은 콘솔은 함수를 통해서 자식 값을 받은 후


if(PETRANIA[i][i] == "darkness"){
  console.log(PETRANIA[0])
}