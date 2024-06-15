function work(string){
  try{
    if(typeof(string) === "string"){
      console.log(string)
    }
    
  }catch(error){
    console.log(`이건 내가 원하는게 아닌데`)
  }
}
work("안녕하세요");
work(1)
work(true)
work({state: `irritate`})