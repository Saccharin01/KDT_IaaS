
// let id = document.getElementsByClassName('root');
// console.log(root.children[0].innerHTML);
// root.children[0].innerHTML = '공미남'

// let id = document.getElementsByClassName('root');
// console.log(root.children[0]);
// root.children[0].innerHTML = '공미남'





// let id = document.getElementById('root');
// console.log(root.children[0]);

// function identiyfind(){
  //   let root = document.getElementById('root')
  //   console.log(root.children[0].innerHTML);
  //   root.children[0].innerHTML = '공미남'
  //   root.style.backgroundColor = "red"
//   root.style.color = "blue"
//   root.style.font = "24px"
// }


// todo <div onclick="identiyfind()">조우식</div1>


let take = window.document.getElementById('root')
 
console.dir(take)
console.log(take.children[0])
take.children[0].innerHTML = "반가워용"
take.style.backgroundColor = "red"
take.style.font = "19px bold"
// take.style.function = (onclick= "alter")

var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"








// let test = {
// 	fool(a){
// 	return a*2
// 	}
// }
// console.log(test.fool(5))


// var obj2 = {
//   *g() {
//     var index = 0;
//     while (true) yield index++;
//   },
// };
//   *g() {

// let test = {
// 	a(q){
// 	return q*2
// 	}
// }
// console.log(test.a(2))


var obj2 = {
  g: function* () {
    var index = 0;
    while (true) yield index++;
  },
};

console.log(obj2)
// 단축 구문을 쓰는 같은 객체
// var obj2 = {
//   *g() {
//     var index = 0;
//     while (true) yield index++;
//   },
// };