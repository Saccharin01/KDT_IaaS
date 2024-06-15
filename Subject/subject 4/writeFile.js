const generate = (filePathName)=>{
const template = require(`./template`)
const fs = require(`fs`)

fs.writeFileSync(`${filePathName}`, template);

}
module.exports = generate