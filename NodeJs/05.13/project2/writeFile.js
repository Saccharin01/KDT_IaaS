const createFile = ()=>{

const template = require(`./template`)
const fs = require(`fs`)

fs.writeFileSync(`./public/index.html`,template);

}

module.exports = createFile