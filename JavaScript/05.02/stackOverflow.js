// let uploadCount = 0;

// window.onload = function() {
//     let frm = document.forms[0];
//     //익명 함수는 frm이라는 변수를 document.forms의 [0]번째 요소로 초기화 되었다

//     frm.target = "postMe";
//     frm.onsubmit = function() {
//         startUpload();
//         return false;
//     }
// }

// function startUpload() {
//     let fil = document.getElementById("FileUpload" + uploadCount);

//     if (!fil || fil.value.length == 0) {
//         alert("Finished!");
//         document.forms[0].reset();
//         return;
//     }

//     disableAllFileInputs();
//     fil.disabled = false;
//     alert("Uploading file " + uploadCount);
//     document.forms[0].submit();
// }

// if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);



function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12