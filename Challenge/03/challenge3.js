var names = [
  ["구", "하", "림"],
  ["김", "보", "미"],
  ["김", "수", "현"],
  ["김", "정", "수"],
  ["문", "혜", "림"],
  ["배", "성", "빈"],
  ["백", "지", "원"],
  ["송", "이", "현"],
  ["신", "지", "윤"],
  ["유", "으", "뜸"],
  ["유", "호", "영"],
  ["이", "연", "승"],
  ["이", "재", "영"],
  ["이", "종", "수"],
  ["임", "유", "진"],
  ["정", "호", "연"],
  ["조", "우", "식"],
  ["조", "자", "연"],
  ["최", "유", "진"],
  ["황", "재", "민"]
]

console.log(names.length)
// length = 20 == index = 19


window.console.log(names)




// for(let search = 19; -1<search; search--){
//   console.log(names[search])
// }

// ? for(let search = 0; search<=19; search++){
// ? 이것도 되긴 하네. 크거나 같다.

// todo console.log(names[16][0] + names[16][1] + names[16][2])


// for(let search = 0; search<=19; search++){

//     console.log(names[search]);
//     console.log(names[search][0]);
//   }    

  for(let search = 0; search<=19; search++){

    console.log(names[search]);
    if(names[search][0]==="조"){
      console.log(names.length)
    }
  }

/**
 * ! 해당 구문값에서 원하는 바가 나오지 않은 이유.
 * ? search 변수에는 name의 index값을 반복문으로 만들어서 대입 시켜놨음.
 * ?그런데 마지막 콘솔 로그 네임.length는 열심히 search라는 변수에 대입한 name의 index값을 굳이 어렵게 name에서 찾아보고 있었음.
 * 
 * ? 생각보다 단순하게, name의 index = search이기 때문에
 * ? name.length를 쓰는게 아니라 위의 search변수를 호출하면
 * ? search는 if문에서 해당하는 변수의 값 (name의 인덱스 값)을 되돌려 줄 것
 */
console.log("줄 바꿈")
console.log("줄 바꿈")
console.log("줄 바꿈")
console.log("줄 바꿈")
console.log("줄 바꿈")
console.log("줄 바꿈")


  for (let i = 0; i<19; i++){
    console.log(names[i]);
      if (names[i][0] === "조"){
        console.log(i)
      }
    }
  /** 
   * ? 위의 구문을 통해서 names의 n번째 요소 중에 [0], 그러니까 n번째 요소 중 첫 글자가 "조"인 녀석들에게는 인덱스 값을 산출하도록 해놔서 내가 원하는 값인 "조우식"이 몇 번째 인덱스인지 찾아냈음. 
   */
  console.log("줄 바꿈")
  console.log("줄 바꿈")
  console.log("줄 바꿈")
  console.log("줄 바꿈")
  console.log("줄 바꿈")

  for (let i = 0; i<19; i++){
    console.log(names[i]);
      if (names[i][0] == "조"){
        console.log(i)
        if (i == 16){
          console.log(names[i][0]+names[i][1]+names[i][2])
        }
      }
      else {
        console.log("암것두 아냐")
    }
  }
// todo 지금부터 위 코드를 리팩토링 해서 더 보기 좋게 뜯어야 함.

console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")
console.log("====줄 바꿈====")


for (let i = 0; i<19; i++){
  console.log(names[i]);
    if (names[i][0] == "조"){
      console.log(i)
      if (i == 16){
        console.log(names[i][0]+names[i][1]+names[i][2])
      }
    }
    else {
      console.log("암것두 아냐")
  }
}










// for(let i = 0; i<3; i++){

//   window.console.log(names[16][0] + names[16][1] + names[16][2])

  
// }