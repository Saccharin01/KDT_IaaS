let root = document.getElementById("root")

//! root 스타일링
root.style.display = "grid"
root.style.gridTemplateColumns = "repeat(5, 1fr)"
root.style.gridTemplateRows = "repeat(4, 1fr)"
root.style.gap = "1vw"
root.style.width = "100vw"
root.style.minHeight = "100vh"
root.style.height = "auto"
root.style.margin = "2vw auto"
root.style.gridAutoRows = "minmax"

const bank = {}
bank.gridTemplateColumns = "repeat(5, 1fr)"
bank.gridTemplateRows = "repeat(4, 1fr)"

console.log(bank)

bank.root = {}

console.log(bank)
// ! 자식 요소 시작점
for (let i = 0; i<root.children.length; i++){
  root.children[i].innerHTML = [i]
}

function display(dp){
  for(let i = 0; i<root.children.length; i++){
    root.children[i].style.display = dp;
  }
    }
    
    
    function alignItems(ali){
      for(let i = 0; i<root.children.length; i++){
        root.children[i].style.alignItems = ali;
      }
    }
    
    function justifyContent(jc){
      for(let i = 0; i<root.children.length; i++){
        root.children[i].style.justifyContent = jc;
      }
    }
    
    function fontSize(fs){
      for(let i = 0; i<root.children.length; i++){
        root.children[i].style.fontSize = fs
      }
    }
    
    function backgroundColor(bg){
      for(let i = 0; i<root.children.length; i++){
        root.children[i].style.backgroundColor = bg
      }
    }
    
    function border(bor){
      for(let i = 0; i<root.children.length; i++){
        root.children[i].style.border = bor
      }
    }
    
    
    function padding(pd){
      for(let i = 0; i<root.children.length; i++){
        root.children[i].style.padding = pd
      }
    }
    
    
    display('flex');
    alignItems('center')
    justifyContent('center')
    fontSize('1rem')
    backgroundColor('#f0f0f0')
    border('1px solid #ccc')
    padding('ivw')
    
// todo 미

    
    //  function childstyle(){
      // root.children[i].style.alignItems = "center"
      //   root.children[i].style.display = "flex"
      //   root.children[i].style.justifyContent = "center"
      //   root.children[i].style.fontSize = "1rem"
  //   root.children[i].style.backgroundColor = "gray"
  //   root.children[i].style.border = "1px solid #ccc"
  //   root.children[i].style.padding = "1vw"
  //  }
  //  root.children = childstyle()
  // }
  // root = rootStyle()
  
  
  
  // for(i = 0; i<root.children.length; i++){
  //   for(j=0;j<5;j++)
  //   {
    //     console.log(i+'x'+j+'='+i*j)
  //   }
  // }