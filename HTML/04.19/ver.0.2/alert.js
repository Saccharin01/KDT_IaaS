// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   gender: "male",
//   interests: ["music", "skiing"],
//   bio: function () {
//     alert(
//       this.name[0] +
//         " " +
//         this.name[1] +
//         " is " +
//         this.age +
//         " years old. He likes " +
//         this.interests[0] +
//         " and " +
//         this.interests[1] +
//         ".",
//     );
//   },
//  ? greeting: function () {
// ?    alert("Hi! I'm " + this.name[0] + ".");
//   },
// };
// person.greeting();

// person.bio()

const popUp = {
  name: "조우식",
  gender: "남성",
  hi: "만나서 반갑습니다. ",
  noti: "이번에는 데이터 타입에 대해서 html 문서를 작성 해봤습니다.",
}
let hi = (popUp.hi)
let noti = (popUp.noti)
alert(hi + noti)

const isKong = confirm("공욱재 강사 님 맞으십니까")
console.log(isKong)
if (isKong == true){
  alert("환영합니다, 강사 님.")
}
// else{
//   alert("Access is not permitted");
//   let wrap = document.getElementsByClassName("wrap");
//   wrap[0].style.display = "none";  
// }

else{
  alert("unauthorized access has been detected\n Access Denied");
  window.location.href = "https://www.google.com/";
}





//location.href = "https://www.naver.com"};
  // else {alert("반갑습니다 Anonymous");}
// location = }
