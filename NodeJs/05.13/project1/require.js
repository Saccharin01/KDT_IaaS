const test = 
  function requestMethod(ele, type, argument){
    
    if(req.url === ele){
      const mainPage = fs.readFileSync(argument);
      res.statusCode = 200;
      res.setHeader(`content-type`,type);
      res.write(mainPage);
      res.end()
    }
  }

module.exports = test