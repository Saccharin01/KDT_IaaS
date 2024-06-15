// function whatWork(inputstring) {
//   let result = '';
//   let isWhatWorked = false;
//   let space = ' ';
//   console.log(isWhatWorked)

//   for(let i = 0; i < inputstring.length; i++){
//     if(inputstring[i] !== space){
//       //인풋스프링[]의 값이 스페이스가 아니면 내려가라
//       if(isWhatWorked === true){
//         //왓 웍드의 값이 true라면
//         result = result + inputstring[i];
//       } else {
//       if(inputstring[i] !== space) {
//         isWhatWorked = true;
//         result = result + inputstring[i];
//         console.log(2)
//       }
//     }
//   }
// }
// return result;
// }

//==================================================================================

// function whatWork(inputstring) {
  //   let result = '';
  //   let isWhatWorked = false;
//   let space = ' ';
//   console.log(isWhatWorked)


//   for(let i = 0; i < inputstring.length; i++){
  //     if(inputstring[i] !== space){
    //       result = result + inputstring[i];
    //       } else {
      //       if(inputstring[i] !== space) {
        //         isWhatWorked = true;
        //         result = result + inputstring[i];
//         console.log(2)
//       }
//     }
// }
// return result;
// }

//==================================================================================

function whatWork(inputstring) {
  let result = '';
  let isWhatWorked = false;
  let space = ' ';
  console.log(isWhatWorked)

  for(let i = 0; i < inputstring.length; i++){
    if(inputstring[i] !== space && isWhatWorked === true){
      result = result + inputstring[i];
      } else {
      if(inputstring[i] !== space) {
        isWhatWorked = true;
        result = result + inputstring[i];
        console.log(2)
      }
    }
  }
    return result;
  }
    







const quotes = "성공은 결과이지 목적이 아니다. 목적은 당신이 무엇을 하느냐이다.";

console.log([quotes.length])
const trimmedQuotes = whatWork(quotes);
console.log(trimmedQuotes);