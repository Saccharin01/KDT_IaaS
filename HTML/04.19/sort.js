//? const nums = [3, 1, 2];
// const sortedNums = nums.sort();
// console.log({ nums, sortedNums });
// console.log(nums);
// console.log(nums[0])



function first() {
  setTimeout(function () {console.log(1);},  500 );
}
// ? first라는 함수를 선언
// ? first 함수는 객체 값을 가진다
// ? 객체 속에는 setTimeout 함수가 있다
//? setTimeout (함수 선언 () {콘솔에 기록해라 1}, 지연시간 500밀리 초 설정)}


// Simulate a code delay


/**
 * *ㅁㄴㅇ
 */
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function second(){ console.log(2);}
first();
second();
//2
//1


// ? 결과값에 대한 예상
// * 1, 2에 해당하는 변수 선언,할당이 되어있지 않기 때문에 콘솔에는 정수값 1, 2가 출력되게 된다.
// * 이 상황에서 first함수와 second함수를 순차 호출하였다 (자바 스크립트는 위에서 아래로 읽어 내려가기 때문에)
// * 하지만 first 함수에는 delay 500ms가 설정이 되어있기 때문에 최초 호출 시점 + 500ms 뒤에 1이라는 값이 출력된다
// * first 함수에 대한 처리가 끝나고 second 함수에 대한 처리를 시작했으나, 딜레이 타임 때문에 first 함수의 값이 출력이 지연되었고, 후 순위 호출된 second 함수의 값이 먼저 출력되게 된다.
// * 1의 함수값이 나오기 전에 2가 나왔기 때문에 비동기인가?
// * 1의 명령을 수용 한 다음 2의 명령을 수용 했으니 동기인가?

//* 동기 비동기
//* 동기 : 점원이 주문을 받고, 점원이 상품을 건내준다. 이 상황에서 뒤에 줄이 얼마나 길 더라고 점원은 한 번에 하나의 주문과 상품처리만 한다.
//* 비동기 : a라는 점원은 주문을 b라는 점원은 상품을 건내준다.  상품은 a에게 받지 않고 b에게 받는다.
//* a는 주문만 받기 때문에 대기열을 빠르게 처리할 수 있다.
//* 다만, a가 신나게 주문을 받아재끼면 b는 주문을 처리하는데 딜레이가 생길 수 있다. 주문을 받은 순간과, 제품이 나오는 순간의 갭이 발생한다.

//! 이거에 의거하면 위의 setTimeout은 비동기 처리인가?

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        ".",
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};