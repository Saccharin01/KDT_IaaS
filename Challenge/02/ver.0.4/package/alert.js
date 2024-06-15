const popUp = {
  name: "조우식",
  gender: "남성",
  hi: "만나서 반갑습니다. ",
  noti: "이번에는 데이터 타입에 대해서 html 문서를 작성 해봤습니다.",
}


  // * alert(popUp.hi + popUp.noti)
  
popUp.id = "tutor"
popUp.pw = "green305"

console.log(popUp)

let confirmId = popUp.id
let confirmPw = popUp.pw

console.log(confirmId)
console.log(confirmPw)

popUp.tutor = "공욱재"

let auth = confirm("공욱재 강사 님 맞으십니까?")

if (auth == false) {
    alert("Identfication Fail");
    window.open("https://google.com")
} else {

    let userid = prompt("아이디를 입력하세요")
    let userpw = prompt("비밀번호를 입력하세요");

    if (userid == confirmId) {
        if (userpw == confirmPw) {
            alert(popUp.hi + popUp.noti)
        }
    } else {
        alert("Unautorize Accsee has been dectected\nAccess Denied");
        window.open("https://www.naver.com");
    }
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