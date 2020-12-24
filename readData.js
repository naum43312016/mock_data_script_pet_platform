const fs = require('fs');

let rawdata = fs.readFileSync('animals.json');
let animals = JSON.parse(rawdata);
console.log(animals);
 