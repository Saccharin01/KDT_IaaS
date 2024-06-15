const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});






