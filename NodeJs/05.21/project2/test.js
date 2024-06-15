const htmlMarkup = {
  head: "헤드",
  body: "바디"
}

function test(object){
  let result = [];
  for(let key in object){
    result.push(`<${key}> ${object[key]} </${key}>`);
  }
  console.log(result);
  return result.join(`\n`);
};

test(htmlMarkup)
console.log(test(htmlMarkup))

// const htmlMarkup = {
//   head: {
//     title: "json 연습",
//   },
//   body: {
//     header: "메뉴 부분",
//     main: "메인 컨텍스트",
//     footer: "하단 부분",
//   },
// }