const catBreed = require('./catBreeds');
const dogBreed = require('./dogBreeds');
const getPictures = require('./getPictures');
const mockData = [{
    "name": "Deidre",
    "color": "Green"
  }, {
    "name": "Domenico",
    "color": "Red"
  }, {
    "name": "Rosy",
    "color": "Purple"
  }, {
    "name": "Bartolemo",
    "color": "Yellow"
  }, {
    "name": "Jasper",
    "color": "Aquamarine"
  }, {
    "name": "Gardie",
    "color": "Blue"
  }, {
    "name": "Rufus",
    "color": "Indigo"
  }, {
    "name": "Emmy",
    "color": "Fuscia"
  }, {
    "name": "Reba",
    "color": "Purple"
  }, {
    "name": "Florette",
    "color": "Aquamarine"
}]
const len = mockData.length;
exports.getName = () => {
  return mockData[getRandomIndex()].name;
}
exports.getAnimalType = () => {
  let x = Math.floor(Math.random() * 10);
  if(x<5){
    return "dog";
  }else{
    return "cat";
  }
}
exports.getStatus = () => {
  let x = Math.floor(Math.random() * 10);
  if(x<6){
    return "available";
  }else if(x>5 && x<7){
    return "foster";
  }else{
    return "adopted";
  }
}
exports.getHeightAndWeight = () => {
  let x = Math.floor(Math.random() * 10);
  if(x<6){
    //small
    let h = Math.floor(Math.random() * (10 - 36) + 36);
    let w = Math.floor(Math.random() * (1 - 11) + 11);
    return {h,w};
  }else if(x>5 && x<7){
    //med
    let h = Math.floor(Math.random() * (36 - 51) + 51);
    let w = Math.floor(Math.random() * (11 - 26) + 26);
    return {h,w};
  }else{
    //big
    let h = Math.floor(Math.random() * (51 - 100) + 100);
    let w = Math.floor(Math.random() * (26 - 50) + 50);
    return {h,w};
  }
}
exports.getColor = () => {
  return mockData[getRandomIndex()].color;
}

exports.getDiet = () => {
  return "no diet restrictions";
}

exports.getAlergy = () => {
  let x = Math.floor(Math.random() * 10);
  if(x<3){
    return "yes";
  }else{
    return "no";
  }
}
exports.getBreed = (type) => {
  if(type==='dog'){
    return dogBreed.getRandomDogBreed();
  }else{
    return catBreed.getRandomCatBreed();
  }
}
exports.getBio = (name) => {
  return `Meet ${name}!`
}

exports.getImageUrl = (type) => {
  if(type==='dog'){
    return getPictures.getRandomDogImage();
  }else{
    return getPictures.getRandomCatImage();
  }
}

const getRandomIndex = () => {
  return Math.floor(Math.random() * len);
}
