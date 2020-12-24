const utils = require('./data');
const fs = require('fs');
console.log("name="+utils.getName());
console.log("name="+utils.getColor());
console.log("getHeightAndWeight="+utils.getHeightAndWeight().h);

let animals = [];

for(let i=0;i<40;i++){
    let name = utils.getName();
    let type = utils.getAnimalType();
    let status = utils.getStatus();
    let color = utils.getColor();
    let size = utils.getHeightAndWeight();
    let diet = utils.getDiet();
    let alergy = utils.getAlergy();
    let breed = utils.getBreed(type);
    let bio = utils.getBio(name);
    let imageUrl = utils.getImageUrl(type);
    let animal = {
        name:name,
        type:type,
        status:status,
        color:color,
        height:size.h,
        weight:size.w,
        diet:diet,
        alergy:alergy,
        breed:breed,
        bio:bio,
        imageUrl:imageUrl
    }
    animals.push(animal);
}
 
let data = JSON.stringify(animals, null, 2);

fs.writeFile('animals.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');