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


// let hi = (popUp.hi)
// let noti = (popUp.noti)
// alert(hi + noti)

// const idpw = {
  //   id: "tutor",
  //   pw: "green305" 
  // }
  alert(popUp.hi + popUp.noti)
  
popUp.id = "tutor"
popUp.pw = "green305"

console.log(popUp)

let confirmId = popUp.id
let confirmPw = popUp.pw

console.log(confirmId)
console.log(confirmPw)


      let userid = prompt("아이디를 입력하세요")
      let userpw = prompt("비밀번호를 입력하세요");
  
      if (userid == confirmId) {
          if (userpw == confirmPw) {
              alert("반갑습니다")
          }
      } else {
          alert("Unautorize Accsee has been dectected\nAccess Denied");
          window.open("https://www.naver.com");
      }



//! window.location.href = "https://www.google.com/";
//!  경험이 불쾌해서 우회함. 다만, 원래 목적은 이 쪽.
  /**
   * todo active under script before deploy
   * 
   * 
  const isKong = confirm("공욱재 강사 님 맞으십니까")
  console.log(isKong)
  if (isKong == true){
    alert("환영합니다, 강사 님.")
  }
  
  else{
    alert("unauthorized access has been detected\n Access Denied");
  }
  * 
  * 
  * 
 * 
 * 
 */












// else{
//   alert("Access is not permitted");
//   let wrap = document.getElementsByClassName("wrap");
//   wrap[0].style.display = "none";  
// }