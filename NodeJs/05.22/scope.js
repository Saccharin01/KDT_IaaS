let counter = 0;
const animation = function(){


  setTimeout(()=>{
    // console.log(`${counter}vw`)
    console.log(`aniElement.style.left = ${counter}vw`)
    counter++;
    if(counter < 100){
      animation()
    }else{
      console.log(`break!!!!!`)
    }

  },1000)
}

animation()