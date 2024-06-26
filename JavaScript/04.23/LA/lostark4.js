
let thing = []
console.log(thing)

thing = ['조우식', '아빠', '엄마', '외할머니', '친할머니', '고모부']

console.log(thing)

console.log(thing[0][0])

for(i = 0; i<thing.length; i++){
  let ele = ['1', '2', '3', '4', '5']
  thing[i] = [ele]
};  


console.log(thing[0])
console.log(thing[0][0])

/**
 * * 반복문 (변수a = 0을 할당; a는thing.length 보다 작다; a를 증가시켜라 )
 * *만일, a의 0번째 배열이 "조우식"과 같다면(데이터 타입 신경 쓰지 않고)
 * * 콘솔에 기록해라 a의 0번째 배열을.
 */
for(a = 0; a < thing.length; a++){
  if(a[0] == "조우식"){
    console.log(a[0])
  }
}

/**
 * * 내가 의도했던 결과값
 * *console.log(a[0]) 이 결과에서 '조우식'이라는 항목의 자식 값에 ['1', '2', '3', '4', '5'] 가 나왔으면 했었다.
 * 
 *  * 그러나, 계속해서 false 값이 도출되며 if 단계에 아래에 있는 console.log(a[0]) 실행문으로 이행이 되지 않았음.
 * 
 *  * 해당 원인을 분석하고자 17번째 줄에 콘솔을 찍었는데, 조우식 : ['1', '2', '3', '4', '5'] 가 아니라
 * 
 * * array(5) ['1', '2', '3', '4', '5']
 * 
 * * 이런 값이 계속해서 도출되었음.
 * 
 * * a의 0번째 배열값이 '조우식' 이 아니라 [Array(5)] 라고 표기 되어있는것을 보고 내 의도대로 이행 된 것이 아님을 진단.
 * 
 * * 그렇다면 내 의도대로 진행을 하려면 어떻게 해야할지 고민하던 중 재민 씨 에게 도움을 요청
 * 
 * * 재민 씨는 제 의도와 코드를 비교하고 지금 우식 씨가 하려는 것은 "배열 속에 배열을 넣고 그 속에 배열이 있는것" 이라는 답을 얻었음.
 * 
 * * 해당 작업은 실제로, 본인이 의도한 바에 부합한 작업이였으나, 너무 고수준의 작업이였음을 진단 후 작업 중지.(가변배열 , )
 * 
 * * 그렇다면 원래 의도했던 조우식 : ['1', '2', '3', '4', '5'] 가 나오려면 어떻게 해야 할지 다시 질문.
 * 
 * * 배열 속에 배열을 넣지 말고, 객체 속에 배열을 넣으면 된다는 대답이 돌아옴.
 * 
 * * 본인도 그 부분에 동감하고 이해함. 결과값을 살펴보니 본인이 의도한 그 답이 나온 것을 확인.
 * 
 * * 애초에 구조의 설계 자체가 잘못되었음을 인지.
 * 
 * * 작업 종결.
 * 
*/