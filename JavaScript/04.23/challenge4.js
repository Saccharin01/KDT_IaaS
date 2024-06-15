var someData = []
var someIndex = 0;

for (var i = 0; i < someArray.length; i += 2){
  if (i + 1 < someArray.length){
    someData[someIndex] = [someArray[i], someArray[i + 1]];
  } else{
    someData[someIndex] = [someArray[i]];
  }
  someIndex++;
}

console.log(somedata);

/**
 * * 변수 선언 somedata 는 배열
 * * 변수 선언 someIndex는 정수 값
 * 
 * * 반복문 (i는 0으로 초기화 ; i는 someArray.length보다 작다(someArray의 인덱스화) ; )
 */