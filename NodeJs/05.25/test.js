const outerFunc = () => {
  let x = 10; // '자유 변수' 라고 한다.

  // 클로저
  const innerFunc = (y) => {
      x = x + y;
      console.log(x);
  }

  return innerFunc;
}

const addFunc = outerFunc();
addFunc(5); // 15
addFunc(10); // 25
addFunc(1024)